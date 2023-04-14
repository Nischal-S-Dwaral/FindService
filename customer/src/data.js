/**
 * Sample Data for populating the UI.
 */
export const categories = [
    {
        id: 1,
        img: "https://cdn-icons-png.flaticon.com/128/994/994928.png",
        title: "Cleaning",
        value: "cleaning"
    },
    {
        id: 2,
        img: "https://cdn-icons-png.flaticon.com/128/4215/4215117.png",
        title: "Baby Sitting",
        value: "babySitting"
    },
    {
        id: 3,
        img: "https://cdn-icons-png.flaticon.com/128/6485/6485915.png",
        title: "Pest Control",
        value: "pestControl"
    },
    {
        id: 4,
        img: "https://cdn-icons-png.flaticon.com/128/9746/9746852.png",
        title: "Plumbing",
        value: "plumbing"
    },
    {
        id: 5,
        img: "https://cdn-icons-png.flaticon.com/128/3713/3713314.png",
        title: "Electrical Repairs",
        value: "electricalRepairs"
    },
    {
        id: 6,
        img: "https://cdn-icons-png.flaticon.com/128/1940/1940993.png",
        title: "Beauty",
        value: "beauty"
    },
    {
        id: 7,
        img: "https://cdn-icons-png.flaticon.com/128/3357/3357272.png",
        title: "Others",
        value: "others"
    }
]

export const categoryValueToText = new Map([
    ["cleaning", "Cleaning"],
    ["babySitting", "Baby Sitting"],
    ["pestControl", "Pest Control"],
    ["others", "Others"],
    ["plumbing", "Plumbing"],
    ["electricalRepairs", "Electrical Repairs"],
    ["beauty", "Beauty"]
]);

export const serviceRequests = [
    {
        id: 1,
        serviceName: "Bathroom Cleaning",
        serviceProvider: "Urban Clean",
        status: "Pending"
    },
    {
        id: 2,
        serviceName: "House Cleaning",
        serviceProvider: "Urban Clean",
        status: "Accepted"
    },
    {
        id: 3,
        serviceName: "Baby Sitting",
        serviceProvider: "MotherCare",
        status: "Rejected"
    },
    {
        id: 4,
        serviceName: "Plumbing",
        serviceProvider: "Waterways",
        status: "Update Required"
    },
    {
        id: 5,
        serviceName: "Electrical Repairs",
        serviceProvider: "Bulb",
        status: "Completed"
    },
    {
        id: 6,
        serviceName: "Bathroom Cleaning",
        serviceProvider: "Urban Clean",
        status: "Pending"
    },
    {
        id: 7,
        serviceName: "House Cleaning",
        serviceProvider: "Urban Clean",
        status: "Accepted"
    },
    {
        id: 8,
        serviceName: "Baby Sitting",
        serviceProvider: "MotherCare",
        status: "Rejected"
    },
    {
        id: 9,
        serviceName: "Plumbing",
        serviceProvider: "Waterways",
        status: "Update Required"
    },
    {
        id: 10,
        serviceName: "Electrical Repairs",
        serviceProvider: "Bulb",
        status: "Completed"
    },
    {
        id: 11,
        serviceName: "Bathroom Cleaning",
        serviceProvider: "Urban Clean",
        status: "Pending"
    }
];

export const serviceRequestDetails = [
    {
        id: 1,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Accepted",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 2,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Rejected",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            }
        ]
    },
    {
        id: 3,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Update Required",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 4,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Completed",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 5,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Pending",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 6,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Accepted",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 7,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Accepted",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 8,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Accepted",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 9,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Accepted",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 10,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Accepted",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    },
    {
        id: 11,
        requestId: 1,
        customerId: 1,
        customerName: "Nischal",
        serviceName: "Kidz Company",
        category: "Electrical Repairs",
        date: "27/03/2023",
        time: "2:00 PM",
        address: "Highfield Campus, Southampton, SO17 2GY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        status: "Accepted",
        moreDetailsComments: [
            {
                id: 1,
                sender: "Service Provider",
                timestamp: "22/03/2023 10:00AM",
                commentText: "Can you give more information about your preference"
            },
            {
                id: 2,
                sender: "Nischal",
                timestamp: "24/03/2023 12:00PM",
                commentText: "I would prefer the service to be done on the exact time, else we can reschedule it later"
            },
            {
                id: 3,
                sender: "Service Provider",
                timestamp: "25/03/2023 10:30AM",
                commentText: "Lets reschedule to 28/03/2023 2:00PM"
            },
            {
                id: 4,
                sender: "Nischal",
                timestamp: "25/03/2023 03:00PM",
                commentText: "Sure"
            },
        ]
    }
];

export const notificationData = {
    updatesServiceRequest: [
        {
            id: 1,
            notificationText: "Update in Request 1 I would prefer the service to be done on the exact time, else we can reschedule it later",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/request/1"
        },
        {
            id: 2,
            notificationText: "Update in Request 2 I would prefer the service to be done on the exact time, else we can reschedule it later",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/request/2"
        },
        {
            id: 3,
            notificationText: "Update in Request 3 I would prefer the service to be done on the exact time, else we can reschedule it later",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/request/3"
        },
        {
            id: 4,
            notificationText: "Update in Request 4",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/request/4"
        },
        {
            id: 5,
            notificationText: "Update in Request 5",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/request/5"
        }
    ],
    reviewRequest: [
        {
            id: 1,
            notificationText: "Review for Request 1",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/1/review"
        },
        {
            id: 2,
            notificationText: "Review for Request 2",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/2/review"
        },
        {
            id: 3,
            notificationText: "Review for Request 3",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/3/review"
        },
        {
            id: 4,
            notificationText: "Review for Request 4",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/4/review"
        }
    ],
    general: [
        {
            id: 1,
            notificationText: "General Notification 1",
            notificationTimeStamp: "24/03/2023 03:00PM",
        },
        {
            id: 2,
            notificationText: "General Notification 2",
            notificationTimeStamp: "24/03/2023 03:00PM"
        },
        {
            id: 3,
            notificationText: "General Notification 3",
            notificationTimeStamp: "24/03/2023 03:00PM"
        }
    ]
};