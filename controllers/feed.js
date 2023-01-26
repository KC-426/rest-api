exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is my first post for rest api!!",
        imageUrl: "images/fz.jpg",
        creator: {
          name: "Kuldeep Chahar",
        },
        createdAt: new Date(),
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;                                   // this too
  const content = req.body.content;                              //body-parser required to parse this data
  console.log(title, content);
  res.status(201).json({
    message: "Post created successfully !!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: {name: "kuldeep chahar"},
      createdAt: new Date()
    },
  });
};
