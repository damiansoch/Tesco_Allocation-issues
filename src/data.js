export const list = [
  {
    id: 1,
    title: "Van Trip not on Allocation",
    desctiption:
      "Van Trip is present on the Van Control Sheet, but it's not on the Van Allocation screen. Allocating Van and Driver is not possible.",
    explenation: [
      'Go to Delivery->"Move Orders" screen',
      "type in Trip which isn't available on Van Allocation screen",
      'Move all available orders from above Trip to the "New" Van, and press "Save"',
      'After confirming the changes, the "New" Trip will appear on the Van Allocation screen as trip "Z" ',
      "Allocate the driver and Van to the new Z-Trip",
    ],
  },
  {
    id: 2,
    title: 'Order "Error" or "Awaiting Checkout"',
    desctiption:
      'One of the orders in the van has "error" or "awaiting checkout" status . Van departure time is close and paperwork need to be printed. ',
    explenation: [
      'Go to Delivery->"Move Orders" screen.',
      'Type in the Van Trip that has the "Error" or "Awaiting checkout" status on it. ',
      'Move all the orders from Trip with error to the "New" Van, the order that is on "Error" status won\'t be there, we have to leave this order on the "old" van.',
      'Go to Van Allocation screen -> On the "Old Van" blank the driver, and the van -> DO NOT PRESS "SAVE", YET.',
      'When the driver and the van on the "Old" Trip is blanked, they will automatically become available for the "new" Z-Trip.',
      'Allocate the driver and the Van on the new Z-Trip and press "Save".',
      'When above is completed you should have the same driver and the van on both, "Old" and "New" Z-Trip Van Trips.',
      'Check the full Trip number for the "new" Z-Trip on the Van Allocation screen.',
      "Search for the new Z-trip on the Search screen and print the documentation.",
      'The order with the "error" status won\'t be on the manifest and it won\'t be on SDS, so we need to print the Address, for the driver:->Go to search order screen and search for this order -> When order details are on the screen, press "CTRL + P" and print the page.',
      'After the issue with the order is resolved, the "Old" Van is checked out and driver is back from his run, he should be able to sign in to the SDS again and collect the "Old" trip with the order that was previously on "Error" or "Awaiting checkout".',
      " He can now mark the order as delivered. ",
    ],
  },
  {
    id: 3,
    title: 'All orders in the Van are on "Awaiting Checkout" status.',
    desctiption:
      'All of the orders in the van, or multiple vans are "Awaiting checkouts" or "Error", and you need the paperwork so the vans(s) can get loaded.',
    explenation: [
      "To get all the addresses for the trip go to Reports->Delivery reports->Van Trip details. Type in the trip number. ",
      "The amount of crates and the receipts for the orders won't be available.",
      "Also driver won't be able to use SDS.",
      "Orders are not paid so you need to be instructed by the management or head office to deliver them.",
      "When drivers delivering the orders, they need to explain the customers that the order is not paid for, because there is a problem with the system.",
      " Driver needs to explain that in case of the payment issue, someone may contact the customer to resolve the problem.",
      "Regarding the receipts, driver needs to inform the customer, that they will be posted or delivered as soon as possible if needed.",
    ],
  },
];
