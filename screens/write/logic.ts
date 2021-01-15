import { v4 } from "uuid";
export const paste = async (event: any) => {
  event.preventDefault();
  document.execCommand(
    "insertText",
    false,
    event.clipboardData.getData("text/plain"),
  );
};

export const keyUp = async (
  event: any,
  postIndex: number,
  posts: any,
  setPosts: Function,
  setActive: Function,
) => {
  let currentPosts = posts;
  // delete the field
  if (
    currentPosts.length > 1 &&
    currentPosts[postIndex].data.length === 0 &&
    event.key === "Backspace"
  ) {
    currentPosts.splice(postIndex, 1);
    setPosts([...currentPosts]);
    document.getElementById(`EditAble${postIndex - 1}`)?.focus();
    setActive(postIndex - 1);
    return;
  }

  // change the type of the field when data is added
  if (
    currentPosts[postIndex].type === "" &&
    currentPosts[postIndex].data === ""
  ) {
    currentPosts[postIndex].type = "text";
    currentPosts[postIndex].data = event.target.outerText;
    await setPosts([...currentPosts]);
    document.getElementById(`EditAble${postIndex}`)?.focus();
    setActive(postIndex);
    return;
  }

  // this is the normal adding of the text to the data for saving
  currentPosts[postIndex].data = event.target.outerText;
  await setPosts([...currentPosts]);
  document.getElementById(`EditAble${postIndex}`)?.focus();
  setActive(postIndex);
};

export const keyDown = async (
  event: any,
  postIndex: number,
  data: any,
  posts: any,
  setPosts: Function,
  setActive: Function,
) => {
  let currentPosts = posts;

  // // for removing empty type's
  // currentPosts.map((data, index) => {
  //   if (data.type === "") currentPosts.splice(index, 1);
  // });

  // on tab the focus jump to the next open field
  if (event.key === "Tab") {
    event.preventDefault();
    document.getElementById(`EditAble${postIndex + 1}`)?.focus();
    setActive(postIndex + 1);
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    // this for removing the selected type when there is no data on the last field
    if (
      currentPosts[postIndex].type !== "" &&
      currentPosts[postIndex].data !== ""
    ) {
      currentPosts.splice(postIndex + 1, 0, {
        ...data,
        id: v4(),
        color: "",
        marginLeft: currentPosts[postIndex].marginLeft,
        textAlign: "",
      });
      setPosts([...currentPosts]);
      setTimeout(() => {
        document.getElementById(`EditAble${postIndex + 1}`)?.focus();
        setActive(postIndex + 1);
      }, 200);
      setActive(postIndex) + 1;
    } else {
      setTimeout(() => {
        document.getElementById(`EditAble${postIndex + 1}`)?.focus();
        setActive(postIndex + 1);
      }, 200);
      setActive(postIndex) + 1;
    }

    return;
  }

  // this is to change and empty field to text when it have data
  if (currentPosts[postIndex].type === "" && event.key !== "Backspace") {
    currentPosts[postIndex].type = "text";
    await setPosts([...currentPosts]);
    document.getElementById(`EditAble${postIndex}`)?.focus();
    setActive(postIndex);
  }
};
