'use client'

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function App() {

  const list = [
    {
      title: "Orange",
      img: "https://nextui.org/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://nextui.org/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://nextui.org/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://nextui.org/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://nextui.org/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://nextui.org/images/fruit-6.jpeg",
      price: "$8.00",
    }
  ];

  return (
    <div
      className="py-4 grid w-full h-auto items-center justify-center">
      <div className={'max-w-[1024px] px-6'}>
        <h1 className={'mb-4'}>Categories</h1>
        <div className="mb-4 gap-2 grid grid-cols-6">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}