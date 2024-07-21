const reviews = [
    {
      id: 1,
      name: "William Henry Gates",
      job: "American businessman",
      image: "https://qph.cf2.quoracdn.net/main-qimg-40c159f08d1587be15ea1e982d9cd83e-lq",
      text: "Working with this team was a pleasure. Their technical expertise and ability to deliver quality solutions on time and within budget were impressive. I highly recommend them as a true partner and asset to any project.",
    },
    {
      id: 2,
      name: "Sundar Pichai ",
      job: "CEO of Google",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4eJ0PX5YrCuY_30sCRXHr9SP4FJNKZgkphQ&s",
      text: "Sundar is the CEO of Google and Alphabet and serves on Alphabet's Board of Directors. Under his leadership, Google has been focused on developing products and services, powered by the latest advances in AI, that offer help in moments big and small.",
    },
    {
      id: 3,
      name: "Steve Jobs",
      job: "CEO, and co-founder of Apple",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVB7t6e5gEppBM0IiF3QumreubcZgdBmrT_w&s",
      text: "CEO (1977-1985, 1997-2011): Under his leadership, Apple launched iconic products such as the Macintosh, iPod, iPhone, and iPad. He was known for his attention to design and user experience.",
    },
    {
      id: 4,
      name: "Narayana Murthy",
      job: "Co-founded Infosys in 1981.",
      image: "data:image/jpeg;base64,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",
      text: "Infosys was co-founded by Narayana Murthy along with six other engineers: Nandan Nilekani, N. S. Raghavan, S. Gopalakrishnan, S. D. Shibulal, K. Dinesh, and Ashok Arora. Narayana Murthy is often considered the primary founder and was the company's first CEO.",
    },
    {
      id: 5,
      name: "K. Krithivasan",
      job: "CEO of Tcs",
      image: "data:image/jpeg;base64,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",
      text: "K. Krithivasan is the CEO and Managing Director of Tata Consultancy Services (TCS), one of the largest IT services companies globally. He was appointed to this role in March 2023, succeeding Rajesh Gopinathan.!",
    },
    {
      id: 6,
      name: "Jeff Bezos",
      job: "CEO of Amazon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq-9j6TpvdUdgMRCYINd345uIOR51UE132g&s",
      text: "eff Bezos is an American entrepreneur and business magnate, best known as the founder and former CEO of Amazon, one of the world's largest and most influential companies.",
    },
  ];
  
  export default reviews;