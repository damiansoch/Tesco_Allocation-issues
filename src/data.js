export const list = [
  {
    id: 1,
    title: "Van Trip not on Allocation",
    desctiption:
      "Van Trip is present on the Van Controll Sheet, but it's not on the Van Allocation screen. Alocating Van and Driver is not possible.",
    explenation: [
      'Go to "Move Orders" screen',
      "Choose the Trip witch is't availble on Van Allocation screen",
      'Move all the orders from above Trip to the "New" Van',
      'After confirming the changes, the "New" Trip will appear on the Van Allocation screen as trip "Z" ',
      "Allocate the driver and Van to the new Z-Trip",
    ],
  },
  {
    id: 2,
    title: 'Order "error" or "awaiting checkout"',
    desctiption:
      'One of the orders in the van has "error" or "awaiting checkout" status . Van departure time is close and paperwork need to be printed ',
    explenation: [
      "On the Van Allocation screen allocate driver witch is of today and Van witch is not in use today",
      "(this is important because sometimes after Z-triping the Trip, van and a driver are no logner available to allocate to the new Z-trip)",
      'Go to "Move Orders" screen',
      'Move all the orders from Trip with error to the "New" Van, the order that is on "error" status won\'t be there, we have to leave this order on the "old" van',
      "Search for the new Z-trip on the Search screen and print the documentation",
      'The order with the "error" status will not be on the manifest and it won be on SDS, so we need to print the Address, for the driver:',
      "Go to search order screen and search for this order",
      'When order details are on the screen, press "CTRL + P" and print the page',
    ],
  },
  {
    id: 3,
    title: "item three",
    desctiption:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    explenation: [
      "explenation1",
      "explenation2",
      "explenation3",
      "explenation4",
      "explenation5",
    ],
  },
];
