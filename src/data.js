export const list = [
  {
    id: 1,
    title: "Van Trip not on Allocation",
    desctiption:
      "Van Trip is present on the Van Control Sheet, but it's not on the Van Allocation screen. Allocating Van and Driver is not possible.",
    explenation: [
      'Go to "Move Orders" screen',
      "Choose the Trip which isn't available on Van Allocation screen",
      'Move all the orders from above Trip to the "New" Van',
      'After confirming the changes, the "New" Trip will appear on the Van Allocation screen as trip "Z" ',
      "Allocate the driver and Van to the new Z-Trip",
    ],
  },
  {
    id: 2,
    title: 'Order "Error" or "Awaiting Checkout"',
    desctiption:
      'One of the orders in the van has "error" or "awaiting checkout" status . Van departure time is close and paperwork need to be printed ',
    explenation: [
      "On the Van Allocation screen allocate driver witch is of today and Van witch is not in use today",
      "(this is important because sometimes after Z-tripping the Trip, van and a driver are no longer available to allocate to the new Z-trip)",
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
    title: 'All orders in the Van are on "Awaiting Checkout" status.',
    desctiption:
      'All of the orders in the van, or multiple vans are "Awaiting checkouts" or "Error", and you need the paperwork so the vans(s) can get loaded.',
    explenation: [
      "To get all the addresses for the trip go to Reports->Delivery reports->Van Trip details. Put in the trip number. ",
      "Unfortunately, the amount of crates and the receipts for the orders won't be available.",
      "Also driver won't be able to use SDS.",
      "Orders are not paid so you need to be instructed by the management or head office to deliver them.",
      "When drivers delivering the orders, they need to explain the customers that the order is not paid for, because there is a problem with the system. He needs to explain that in case of the problem with the payment, someone may contact the customer to resolve the issue.",
      "Regarding the receipts, driver needs to inform the customer, that they will be posted or delivered as soon as possible.",
    ],
  },
];
