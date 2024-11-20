import { useRef, useEffect } from 'react';

export const SECTION_LIST_MOCK_DATA = [
    {
      title: 'Appetizers',
      data: [
        {
          id: '1',
          title: 'Pasta',
          price: '10',
        },
        {
          id: '3',
          title: 'Pizza',
          price: '8',
        },
      ],
    },
    {
      title: 'Salads',
      data: [
        {
          id: '2',
          title: 'Caesar',
          price: '2',
        },
        {
          id: '4',
          title: 'Greek',
          price: '3',
        },
      ],
    },
  ];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  const sections = [];

  // Group items by category
  const grouped = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Convert grouped data into the SectionList format
  Object.keys(grouped).forEach((category) => {
    sections.push({
      title: category,
      data: grouped[category],
    });
  });

  return sections;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
