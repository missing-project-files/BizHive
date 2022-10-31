import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentCsv } from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";

export const links = [
  {
    id: 1,
    url: "/",
    text: "random",
  },
  {
    id: 2,
    url: "/option1",
    text: "option1",
  },
  {
    id: 3,
    url: "/option2",
    text: "option2",
  },
  {
    id: 4,
    url: "/option3",
    text: "option3",
  },
  {
    id: 5,
    url: "/option4",
    text: "option4",
  },
];

export const pages = [
  {
    id: 1,
    url: "",
    icon: <GrDocumentCsv />,
  },
  {
    id: 2,
    url: "",
    icon: <ImStatsBars />,
  },
  {
    id: 3,
    url: "",
    icon: <FaUserAlt />,
  },
  {
    id: 4,
    url: "",
    icon: <IoMdSettings />,
  },
];
