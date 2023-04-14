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