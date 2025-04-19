export const heroSlides = [
  {
    id: 1,
    backgroundImage: "/images/banner.png",
    mainImage: "/images/slider-shape-1.png",
    sideImage: "/images/slider-1-layer-3.png",
    heading: "VITAL CAR REPAIRS TO ENSURE SAFETY",
    subheading: "Discovering the finest Automobile Detailing workshop",
  },
  {
    id: 2,
    backgroundImage: "/images/banner.png",
    mainImage: "/images/slider-shape-1.png",
    sideImage: "/images/slider-1-layer-2.png",
    heading: "QUALITY SERVICE AT YOUR DOORSTEP",
    subheading: "We bring top-quality detailing to your home or office",
  },
  {
    id: 3,
    backgroundImage: "/images/banner.png",
    mainImage: "/images/slider-shape-1.png",
    sideImage: "/images/slider-1-layer-1.png",
    heading: "RELIABLE AUTO CARE WITHIN REACH",
    subheading: "Your trusted partner in vehicle maintenance and care",
  },
];




export const homebannerElements=[{
      label: "Heading",
      name: "heading",
      componentType: "input",
      type: "text",
      placeholder: "Enter heading"
    },
    {
      label: "subHeading",
      name: "subHeading",
      componentType: "input",
      type: "text",
      placeholder: "Enter Sub heading"
    },]

    export const serviceElements=[{
      label: "Card Heading",
      name: "cardHeading",
      componentType: "input",
      type: "text",
      placeholder: "Enter heading"
    },
    {
      label: "Card Heading",
      name: "cardSubHeading",
      componentType: "input",
      type: "text",
      placeholder: "Enter Sub heading"
    },
    {
      label: "Video Url",
      name: "vidUrl",
      componentType: "input",
      type: "text",
      placeholder: "Enter embedded youtube url only"
    },]

    export const SpecificServiceElements = [
      {
        label: "Card Heading 1",
        name: "cardHeading1",
        componentType: "input",
        type: "text",
        placeholder: "Enter heading 1"
      },
      {
        label: "Card Subheading 1",
        name: "cardSubHeading1",
        componentType: "input",
        type: "text",
        placeholder: "Enter subheading 1"
      },
      {
        label: "Paragraph 1",
        name: "para1",
        componentType: "textarea",
        placeholder: "Enter paragraph 1"
      },
      {
        label: "Card Heading 2",
        name: "cardHeading2",
        componentType: "input",
        type: "text",
        placeholder: "Enter heading 2"
      },
      {
        label: "Card Subheading 2",
        name: "cardSubHeading2",
        componentType: "input",
        type: "text",
        placeholder: "Enter subheading 2"
      },
      {
        label: "Paragraph 2",
        name: "para2",
        componentType: "textarea",
        placeholder: "Enter paragraph 2"
      },
      {
        label: "Card Heading 3",
        name: "cardHeading3",
        componentType: "input",
        type: "text",
        placeholder: "Enter heading 3"
      },
      {
        label: "Card Subheading 3",
        name: "cardSubHeading3",
        componentType: "input",
        type: "text",
        placeholder: "Enter subheading 3"
      },
      {
        label: "Paragraph 3",
        name: "para3",
        componentType: "textarea",
        placeholder: "Enter paragraph 3"
      },
      {
        label: "Card Heading 4",
        name: "cardHeading4",
        componentType: "input",
        type: "text",
        placeholder: "Enter heading 4"
      },
      {
        label: "Card Subheading 4",
        name: "cardSubHeading4",
        componentType: "input",
        type: "text",
        placeholder: "Enter subheading 4"
      },
      {
        label: "Paragraph 4",
        name: "para4",
        componentType: "textarea",
        placeholder: "Enter paragraph 4"
      }
     
    ];

    export const formElements=[
      {
        label: "",
        name: "name",
        componentType: "input",
        type: "text",
        placeholder: "Enter Email"
      },
    {
      label: "",
      name: "email",
      componentType: "input",
      type: "text",
      placeholder: "Enter Email"
    },
    {
      label: "",
      name: "phone",
      componentType: "input",
      type: "text",
      placeholder: "Enter Phone"
    },
    {
      label: "",
      name: "message",
      componentType: "textarea",
      type: "text",
      placeholder: "message"
    },]


    export const navItems = [
      {
        id: "SERVICES",
        link: "/home/services",
        dropdown: [
          { id: "Our Services", path: "/ourservices" },
          { id: "Service Details", path: "/servicedetails" },
        ],
      },
      {
        id: "PROJECTS",
        link: "/projects",
        dropdown: [
          { id: "Case Studies", path: "/projects/case-studies" },
          { id: "Client Portfolio", path: "/projects/portfolio" },
        ],
      },
      {
        id: "BLOGS",
        link: "/blogs",
        dropdown: [
          { id: "Latest Posts", path: "/blogs/latest" },
          { id: "Tips & Insights", path: "/blogs/insights" },
        ],
      },
  
      {
        id: "CONTACT US",
        link: "/contact-us",
        dropdown: [
          { id: "Support", path: "/contact-us/support" },
          { id: "Request a Quote", path: "/contact-us/quote" },
        ],
      },
    ];