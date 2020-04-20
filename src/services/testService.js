const post_data = [
  {
    _id: 1,
    img:
      "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2019/10_oct/8_tue/img_1570531637329_351.jpg?",
    liked: "",
    username: "test@123",
    caption: "test",
    comments: [
      { _id: 1, author: "Pete Hunt", text: "This is one comment" },
      { _id: 2, author: "Jordan Walke", text: "This is *another* comment" },
      { _id: 3, author: "Foo Bar", text: "This is foo bar" }
    ]
  }
];

export function getPostData() {
  return post_data;
}

export function getComments() {
  const [{ comments }] = post_data;
  return comments;
}
