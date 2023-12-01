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
        }
    ],
    reviewRequest: [
        {
            id: 1,
            notificationText: "Review for Request 1",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/review/1",
            type: "review"
        },
        {
            id: 2,
            notificationText: "Review for Request 2",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/review/2",
            type: "review"
        },
        {
            id: 3,
            notificationText: "Review for Request 3",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/review/3",
            type: "review"
        },
        {
            id: 4,
            notificationText: "Review for Request 4",
            notificationTimeStamp: "24/03/2023 03:00PM",
            redirectUrl: "/review/4",
            type: "review"
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

export const servicesListData = [
    {
        id: "0",
        name: " Radiant Elegance Beauty Studio",
        serviceProviderId: "wWb29suZM1WhGBlvcqvyaHWaau53",
        location: "Canterbury, UK",
        description: "Step into a world of beauty and transformation at Radiant Elegance Beauty Studio. Our expert team of professionals is dedicated to enhancing your natural beauty, offering a range of services from rejuvenating facials and flawless makeup applications to precision hair styling and luxurious spa treatments. Experience the epitome of self-care in an atmosphere of sophistication and relaxation.",
        price: "125",
        category: "beauty",
        availability: "Monday to Saturday: 9:00 AM - 7:00 PM",
        createdAt: "2023-12-01 07:14:33.536",
        updatedAt: null,
        photos: [
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/e8c9aa33-f123-4d55-984a-4c7063acde5f.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/24dd03d4-1021-4c4b-93ad-2999efde67de.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/a97e984a-bee8-4d03-8c8c-c0d5e73e38e1.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/b46f26d0-6c70-46cb-81a1-bb80e87bdd6e.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/bf82d2d8-92cf-427b-9ac2-f6fc1ef0e1f7.jpeg?alt=media"
        ],
        totalRating: "12.0",
        numberOfRatings: "3",
        position: {
            lat: 51.280233,
            lng: 1.0789089
        }
    },
    {
        id: "1",
        name: "FlowMaster Plumbing Solutions",
        serviceProviderId: "57sISIFLoNUWxj2Zt2KImbiLA6k2",
        location: "Bristol, UK",
        description: "Experience top-notch plumbing services with FlowMaster, where expertise meets efficiency. Our skilled professionals tackle leaks, clogs, and installations with precision, ensuring your plumbing works seamlessly. Trust us for reliable solutions that keep the water flowing smoothly in your home or business.",
        price: "95",
        category: "plumbing",
        availability: "Monday to Saturday: 8:00 AM to 6:00 PM",
        createdAt: "2023-12-01 07:00:54.575",
        updatedAt: null,
        photos: [
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/ee2087e8-5459-4f5b-ba77-2c9dc4f5ce7d.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/125267c0-f68e-492a-9c46-8afe66f0d89d.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/71b988dc-134b-4cec-a289-ec9d304f8f6e.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/001f5325-b1ef-4322-a6ef-3c66ec831bca.jpeg?alt=media"
        ],
        totalRating: "3.0",
        numberOfRatings: "1",
        position: {
            lat: 51.454513,
            lng: -2.58791
        }
    },
    {
        id: "2",
        name: "Guardian Gems: Premier Babysitting",
        serviceProviderId: "OYXEj8bJ76hE09DUSZc3k2lQCdW2",
        location: "Kennington Oval, London SE11 5SS, UK",
        description: "Trust our caring team to provide a safe and nurturing environment for your little ones with our premier babysitting service. We prioritize your child's well-being, offering peace of mind for parents in need of reliable and experienced care.",
        price: "180",
        category: "babySitting",
        availability: "Wed - Sun 12AM to 11PM",
        createdAt: "2023-12-01 06:56:43.182",
        updatedAt: null,
        photos: [
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/f575c958-4c4c-4d49-bb22-36c1845b5fd3.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/0d744887-312f-4a12-8ee5-961861dc2069.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/058063ec-25c6-443d-ade8-fe6bfa319dbb.jpeg?alt=media"
        ],
        totalRating: "17.0",
        numberOfRatings: "4",
        position: {
            lat: 51.4837565,
            lng: -0.1149737
        }
    },
    {
        id: "3",
        name: "Green Horizon Lawn Care",
        serviceProviderId: "mXbgEmEu4pdybM3qgvdBAatkcwF2",
        location: "Brighton, Brighton and Hove, UK",
        description: "Transform your outdoor space into a pristine paradise with Green Horizon Lawn Care. Our professional mowing service ensures lush, well-manicured lawns, enhancing the beauty of your home. Experience the difference with precision and expertise.",
        price: "45",
        category: "others",
        availability: "Available on weekdays and weekends",
        createdAt: "2023-12-01 07:18:03.951",
        updatedAt: null,
        photos: [
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/4606d724-c854-4e0b-a1a7-203e8f19469b.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/9e47dc2f-fd38-4e8c-8b8a-71fc6be671e7.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/45b384fc-f012-413f-8c86-381c5f4042ea.jpeg?alt=media"
        ],
        totalRating: "3.0",
        numberOfRatings: "1",
        position: {
            lat: 50.8229402,
            lng: -0.1362672
        }
    },
    {
        id: "4",
        name: "SparkTech Solutions ",
        serviceProviderId: "CQVpknB0FFe38wjca6R8uLSIwnF3",
        location: "Cambridge, UK",
        description: "Experience seamless electrical solutions with SparkTech. Our certified technicians specialize in diagnosing and repairing electrical issues swiftly, ensuring the safety and efficiency of your home or business. From faulty wiring to appliance repairs, trust SparkTech for reliable and expert electrical services.",
        price: "200",
        category: "electricalRepairs",
        availability: "Monday to Saturday: 8:00 AM - 6:00 PM",
        createdAt: "2023-12-01 07:04:56.524",
        updatedAt: null,
        photos: [
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/cb63e6a1-3cfa-4cfb-99a8-b25e06aeea56.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/f8f294a3-2ec9-4ec5-b536-9e98c08b518f.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/3c0708b7-3d14-44e9-b510-7617652950bf.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/9e5b059f-a323-4c9c-aab5-b74feeeafda9.jpeg?alt=media"
        ],
        totalRating: "9.0",
        numberOfRatings: "2",
        position: {
            lat: 52.1950788,
            lng: 0.1312729
        }
    },
    {
        id: "5",
        name: "A.H Home Cleaning Service",
        serviceProviderId: "pLr3BpUozGSvHL2KGB6IlpI9JHw1",
        location: "Kensington, London, UK",
        description: "A.H Home Cleaning Service in London is one of the leading businesses in the Residential Cleaning Services. Also known for Residential Cleaning Services, Bathroom Cleaning Services, Cleaning Services, Deep Cleaning Services, Toilet Cleaning Services, Kitchen Cleaning Services, Floor Cleaning Services, Office Cleaning Services and much more.",
        price: "150",
        category: "cleaning",
        availability: "Mon - Sat 9AM to 6PM",
        createdAt: "2023-12-01 06:46:16.955",
        updatedAt: null,
        photos: [
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/f90d8532-3d1e-4bc2-b9b0-7fe5a4bed4ed.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/9b7a4656-6346-4a8d-916f-8d4b75ccbdb9.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/889cd7b6-ac53-4b59-b1e2-90774aa96596.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/8adfbabd-8904-4938-9789-1fe5e60aaf17.jpeg?alt=media"
        ],
        totalRating: "17.0",
        numberOfRatings: "4",
        position: {
            lat: 51.5010095,
            lng: -0.1932794
        }
    },
    {
        id: "6",
        name: "Glamour Haven Beauty Studio",
        serviceProviderId: "DpwSSPMbUUSObrhMT0axPxziu892",
        location: "Southampton, UK",
        description: " Step into the world of elegance and transformation at Glamour Haven, where our skilled makeup artists craft personalized looks to enhance your natural beauty. Whether it's a special occasion, photoshoot, or just a day of pampering, our studio promises a flawless and radiant makeover experience.",
        price: "165",
        category: "beauty",
        availability: " Monday to Saturday, 10:00 AM - 7:00 PM (Appointments recommended)",
        createdAt: "2023-12-01 07:09:06.161",
        updatedAt: null,
        photos: [
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/9d80b810-f42e-45b8-bf0e-29f134a638e1.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/14e7535d-f50a-40fa-9894-4f64d25bd2f1.jpeg?alt=media",
            "https://firebasestorage.googleapis.com/v0/b/findservice-ebe7e.appspot.com/o/752bd4f8-8e18-48aa-b6a7-182bc9b9e392.jpeg?alt=media"
        ],
        totalRating: "30.0",
        numberOfRatings: "7",
        position: {
            lat: 50.9105468,
            lng: -1.4049018
        }
    }
];

export const reviewsData = {
    "0" : [
        {
            id: "1",
            customerName: "Ellie",
            timeStamp: "11/03/2022 4PM",
            rating: 4,
            comment: "The service was very good and polite"
        },
        {
            id: "2",
            customerName: "Alex",
            timeStamp: "19/05/2022 2PM",
            rating: 5,
            comment: "Excellent experience, highly recommended!"
        },
        {
            id: "3",
            customerName: "Chris",
            timeStamp: "25/08/2022 6PM",
            rating: 3,
            comment: "Average service, room for improvement"
        }
    ],
    "1" : [
        {
            id: "1",
            customerName: "Pratt",
            timeStamp: "29/11/2022 6PM",
            rating: 3,
            comment: "Average service, room for improvement"
        }
    ],
    "2" : [
        {
            id: "1",
            customerName: "Alice",
            timeStamp: "2023-12-02 10:30 AM",
            rating: 5,
            comment: "Exceptional babysitting service! My child loved it."
        },
        {
            id: "2",
            customerName: "Bob",
            timeStamp: "2023-12-03 2:45 PM",
            rating: 4,
            comment: "Great caregivers, and the location is convenient."
        },
        {
            id: "3",
            customerName: "Charlie",
            timeStamp: "2023-12-04 8:00 PM",
            rating: 3,
            comment: "Good service, but a bit pricey for my liking."
        },
        {
            id: "4",
            customerName: "Diana",
            timeStamp: "2023-12-05 11:15 AM",
            rating: 5,
            comment: "Absolutely recommend! Professional and trustworthy."
        }
    ],
    "3" : [
        {
            id: "3",
            customerName: "Charlie",
            timeStamp: "2023-12-04 8:00 PM",
            rating: 3,
            comment: "Good service, but a bit pricey for my liking."
        }
    ],
    "4" : [
        {
            id: "1",
            customerName: "Ellie",
            timeStamp: "11/03/2022 4PM",
            rating: 4,
            comment: "The service was very good and polite"
        },
        {
            id: "2",
            customerName: "Alex",
            timeStamp: "19/05/2022 2PM",
            rating: 5,
            comment: "Excellent experience, highly recommended!"
        }
    ],
    "5" : [
        {
            id: "1",
            customerName: "Emily",
            timeStamp: "2023-12-02 11:15 AM",
            rating: 5,
            comment:
                "I'm extremely satisfied with A.H Home Cleaning Service! The team did an outstanding job, and my home looks spotless. They paid attention to every detail, and I highly recommend their services."
        },
        {
            id: "2",
            customerName: "David",
            timeStamp: "2023-12-03 3:30 PM",
            rating: 4,
            comment:
                "A.H Home Cleaning Service provides efficient and reliable cleaning services. The staff is professional, and the results speak for themselves. I appreciate the thoroughness and attention to customer satisfaction."
        },
        {
            id: "3",
            customerName: "Sophie",
            timeStamp: "2023-12-04 7:45 PM",
            rating: 3,
            comment:
                "Good service overall, but I noticed a few missed spots. It's essential to communicate specific areas that need attention. The team is friendly, and I'll consider using their services again."
        },
        {
            id: "4",
            customerName: "Michael",
            timeStamp: "2023-12-05 10:00 AM",
            rating: 5,
            comment:
                "A.H Home Cleaning Service exceeded my expectations. The team was punctual, thorough, and left my home looking immaculate. I'm impressed with their professionalism and attention to detail."
        }
    ],
    "6" : [
        {
            id: "1",
            customerName: "Sophia",
            timeStamp: "2023-12-02 12:30 PM",
            rating: 5,
            comment:
                "Glamour Haven Beauty Studio is a haven indeed! The makeup artists are incredibly talented, and they understood my vision perfectly. I felt beautiful and confident after the makeover. Highly recommended!"
        },
        {
            id: "2",
            customerName: "Daniel",
            timeStamp: "2023-12-03 4:15 PM",
            rating: 4,
            comment:
                "Great experience at Glamour Haven! The studio has a calming ambiance, and the makeup artists are skilled. I appreciated the attention to detail in creating a look that suited my preferences."
        },
        {
            id: "3",
            customerName: "Isabella",
            timeStamp: "2023-12-04 8:30 PM",
            rating: 3,
            comment:
                "Overall, a good experience. The makeup artists are friendly, but I expected a bit more creativity in the makeover. Nevertheless, the service was professional and timely."
        },
        {
            id: "4",
            customerName: "Oliver",
            timeStamp: "2023-12-05 11:45 AM",
            rating: 5,
            comment:
                "Exceptional service! Glamour Haven Beauty Studio transformed my look for a special event. The makeup artists are talented, and the results exceeded my expectations."
        },
        {
            id: "5",
            customerName: "Ava",
            timeStamp: "2023-12-06 3:00 PM",
            rating: 4,
            comment:
                "Lovely studio with skilled makeup artists. The atmosphere is inviting, and I enjoyed the pampering experience. Would have given 5 stars with a bit more personalized attention."
        },
        {
            id: "6",
            customerName: "Lucas",
            timeStamp: "2023-12-07 7:15 PM",
            rating: 4,
            comment:
                "Glamour Haven Beauty Studio offers a professional and enjoyable makeover experience. The makeup artists are friendly, and the studio is well-maintained. I would recommend it to others."
        },
        {
            id: "7",
            customerName: "Mia",
            timeStamp: "2023-12-08 10:30 AM",
            rating: 5,
            comment:
                "Absolutely loved my experience at Glamour Haven! The makeup artists are skilled, and the studio has a welcoming atmosphere. I felt pampered and glamorous. Will definitely be returning!"
        }
    ]
};

export const serviceRequestData = [
    {
        id: "0",
        serviceId: "0",
        serviceProviderId: "wWb29suZM1WhGBlvcqvyaHWaau53",
        serviceName: "Radiant Elegance Beauty Studio",
        serviceCategory: "beauty",
        customerId: "5699",
        customerName: "Alice",
        description: "I would like to book a beauty session at Radiant Elegance Beauty Studio.",
        date: "12/05/2023",
        time: "02:00pm",
        address: "Canterbury, UK",
        status: "Completed",
        price: "125",
        createdAt: "2023-12-01 08:00:00.000",
        updatedAt: null
    },
    {
        id: "1",
        serviceId: "1",
        serviceProviderId: "57sISIFLoNUWxj2Zt2KImbiLA6k2",
        serviceName: "FlowMaster Plumbing Solutions",
        serviceCategory: "plumbing",
        customerId: "5699",
        customerName: "Bob",
        description: "I need plumbing services from FlowMaster Plumbing Solutions.",
        date: "19/06/2023",
        time: "10:30am",
        address: "Bristol, UK",
        status: "Accepted",
        price: "95",
        createdAt: "2023-12-01 08:30:00.000",
        updatedAt: null
    },
    {
        id: "2",
        serviceId: "2",
        serviceProviderId: "OYXEj8bJ76hE09DUSZc3k2lQCdW2",
        serviceName: "Guardian Gems: Premier Babysitting",
        serviceCategory: "babySitting",
        customerId: "5699",
        customerName: "Charlie",
        description: "Looking for babysitting services at Guardian Gems.",
        date: "01/07/2023",
        time: "08:00pm",
        address: "Kennington Oval, London SE11 5SS, UK",
        status: "Rejected",
        price: "180",
        createdAt: "2023-12-01 09:00:00.000",
        updatedAt: null
    },
    {
        id: "3",
        serviceId: "6",
        serviceProviderId: "DpwSSPMbUUSObrhMT0axPxziu892",
        serviceName: "Glamour Haven Beauty Studio",
        serviceCategory: "beauty",
        customerId: "5699",
        customerName: "David",
        description: "Interested in a beauty session at Glamour Haven Beauty Studio.",
        date: "27/08/2023",
        time: "03:45pm",
        address: "Southampton, UK",
        status: "Update Required",
        price: "165",
        createdAt: "2023-12-01 09:30:00.000",
        updatedAt: null
    }
];

export const serviceRequestComments = {
    "0" : [
        {
            name: "Radiant Elegance Beauty Studio",
            timestamp: "12/05/2023 11am",
            text: "The service you are asking will be an extra 20"
        },
        {
            name: "Demo",
            timestamp: "12/05/2023 1pm",
            text: "That is understandable"
        },
        {
            name: "Radiant Elegance Beauty Studio",
            timestamp: "12/05/2023 3:30pm",
            text: "Completed the service and lovely customer"
        }
    ],
    "1" : [
        {
            name: "FlowMaster Plumbing Solutions",
            timestamp: "19/06/2023 9am",
            text: "Accepted the service, will be 10 minutes early."
        },
    ],
    "2" : [
        {
            name: "Guardian Gems: Premier Babysitting",
            timestamp: "01/07/2023 11am",
            text: "Unfortunately we will not be available on the scheduled time please raise a new request"
        },
    ],
    "3" : [
        {
            name: "Glamour Haven Beauty Studio",
            timestamp: "25/08/2023 11am",
            text: "The service you are asking will be an extra 200"
        },
        {
            name: "Demo",
            timestamp: "26/08/2023 1pm",
            text: "That is a lot more than the advertised cost"
        }
    ],
}

