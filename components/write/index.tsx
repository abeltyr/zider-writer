import {
    Title,
    Text,
    Box,
    CommentBox,
    CommentBoxText,
    Dot,
    DotText,
    Header,
    Header2,
    BoxText,
    Empty,
    ImageContainer,
    ImageFields
} from "./style";
import React, { 
    // useState 
} from "react";
import Image from "next/image"
import Button from "../button";
import { theme } from "../../styles/theme";

const Write = ({ post, posts, setPosts, postIndex, paste, keyUp, keyDown, setActive }) => {
    if (post?.type === "title")
        return (
            <Title
                textAlign={post.textAlign}
                color={post.color}
                marginLeft={post.marginLeft}
                id={`EditAble${postIndex}`}
                contentEditable={true}
                onKeyUp={(event) => {
                    keyUp(event, postIndex, posts, setPosts, setActive)
                }}
                onKeyDown={async (event) => {
                    keyDown(event, postIndex, {
                        type: "text",
                        data: "",
                        initialData: "",
                    }, posts, setPosts, setActive)
                }}
                onPaste={async (event) => {
                    paste(event, posts, setPosts)
                }}
                placeholder="Title"
                suppressContentEditableWarning={true}
            >
                {post?.initialData}
            </Title>
        )
    if (post?.type === "text") {
        return (
            <Text
                textAlign={post.textAlign}
                color={post.color}
                marginLeft={post.marginLeft}
                id={`EditAble${postIndex}`}
                contentEditable={true}
                onKeyUp={(event) => {
                    keyUp(event, postIndex, posts, setPosts, setActive)
                }}
                onKeyDown={async (event) => {
                    keyDown(event, postIndex, {
                        type: "text",
                        data: "",
                        initialData: "",
                    }, posts, setPosts, setActive)
                }}
                onPaste={async (event) => {
                    paste(event, posts, setPosts)
                }}
                placeholder="Paragraph"
                suppressContentEditableWarning={true}
            >
                {post?.initialData}
            </Text>
        );
    }
    if (post?.type === "header")
        return (
            <Header
                textAlign={post.textAlign}
                color={post.color}
                marginLeft={post.marginLeft}
                id={`EditAble${postIndex}`}
                contentEditable={true}
                onKeyUp={(event) => {
                    keyUp(event, postIndex, posts, setPosts, setActive)
                }}
                onKeyDown={async (event) => {
                    keyDown(event, postIndex, {
                        type: "text",
                        data: "",
                        initialData: "",
                    }, posts, setPosts, setActive)
                }}
                onPaste={async (event) => {
                    paste(event, posts, setPosts)
                }}
                placeholder="Header"
                suppressContentEditableWarning={true}
            >
                {post?.initialData}
            </Header>
        );
    if (post?.type === "header2")
        return (
            <Header2
                textAlign={post.textAlign}
                color={post.color}
                marginLeft={post.marginLeft}
                id={`EditAble${postIndex}`}
                contentEditable={true}
                onKeyUp={(event) => {
                    keyUp(event, postIndex, posts, setPosts, setActive)
                }}
                onKeyDown={async (event) => {
                    keyDown(event, postIndex, {
                        type: "text",
                        data: "",
                        initialData: "",
                    }, posts, setPosts, setActive)
                }}
                onPaste={async (event) => {
                    paste(event, posts, setPosts)
                }}
                placeholder="Description"
                suppressContentEditableWarning={true}
            >
                {post?.initialData}
            </Header2>
        );

    if (post?.type === "box")
        return (
            <Box marginLeft={post.marginLeft}>
                <BoxText
                    textAlign={post.textAlign}
                    color={post.color}
                    id={`EditAble${postIndex}`}
                    contentEditable={true}
                    onKeyUp={(event) => {
                        keyUp(event, postIndex, posts, setPosts, setActive)
                    }}
                    onKeyDown={async (event) => {
                        keyDown(event, postIndex, {
                            type: "text",
                            data: "",
                            initialData: "",
                        }, posts, setPosts, setActive)
                    }}
                    onPaste={async (event) => {
                        paste(event, posts, setPosts)
                    }}
                    placeholder="Message"
                    suppressContentEditableWarning={true}
                >
                    {post?.initialData}
                </BoxText>
            </Box>
        );
    if (post?.type === "commentBox")
        return (
            <CommentBox marginLeft={post.marginLeft}>
                <div className='leftBox' />
                <div className='RightBox'>
                    <CommentBoxText
                        textAlign={post.textAlign}
                        color={post.color}
                        id={`EditAble${postIndex}`}
                        contentEditable={true}
                        onKeyUp={(event) => {
                            keyUp(event, postIndex, posts, setPosts, setActive)
                        }}
                        onKeyDown={async (event) => {
                            keyDown(event, postIndex, {
                                type: "text",
                                data: "",
                                initialData: "",
                            }, posts, setPosts, setActive)
                        }}
                        onPaste={async (event) => {
                            paste(event, posts, setPosts)
                        }}
                        placeholder="Quote"
                        suppressContentEditableWarning={true}
                    >
                        {post?.initialData}
                    </CommentBoxText>
                </div>
            </CommentBox>
        );
    if (post?.type === "dot")
        return (
            <Dot marginLeft={post.marginLeft}>
                <div className='leftBox' />
                <div className='RightBox'>
                    <DotText
                        textAlign={post.textAlign}
                        color={post.color}
                        id={`EditAble${postIndex}`}
                        contentEditable={true}
                        onKeyUp={(event) => {
                            keyUp(event, postIndex, posts, setPosts, setActive)
                        }}
                        onKeyDown={async (event) => {
                            keyDown(event, postIndex, {
                                type: "dot",
                                data: "",
                                initialData: "",
                            }, posts, setPosts, setActive)
                        }}
                        onPaste={async (event) => {
                            paste(event, posts, setPosts)
                        }}
                        placeholder="Text"
                        suppressContentEditableWarning={true}
                    >
                        {post?.initialData}
                    </DotText>
                </div>
            </Dot>
        );

    // // // Future ADD on's
    // if (post?.type === "image")
    // return (
    //     <p></p>
    // );
    // if (post?.type === "boxLis")
    //     return (
    //         <BoxList id={`EditAble${postIndex}`}>
    //             {post?.data.map((_, index) => {
    //                 return (
    //                     <BoxListText
    //                         id={`EditAble${postIndex}-${index}`}
    //                         key={index}
    //                         display={posts[postIndex].data[index] === "" ? 1 : 0}
    //                         contentEditable={true}
    //                         onKeyUp={(event: any) => {
    //                             IKeyUp(event, postIndex, index, posts, setPosts)
    //                         }}
    //                         onKeyDown={(event: any) => {
    //                             IKeyDown(event, postIndex, index, posts, setPosts)
    //                         }}
    //                         onPaste={async (event) => {
    //                             paste(event, posts, setPosts)
    //                         }}
    //                     />
    //                 );
    //             })}
    //         </BoxList>
    //     );
    // if (post?.type === "commentBoxList")
    //     return (
    //         <CommentBoxList id={`EditAble${postIndex}`}>
    //             <div className='leftBox' />
    //             <div className='RightBox'>
    //                 {post?.data.map((_, index) => {
    //                     return (
    //                         <CommentBoxListText
    //                             id={`EditAble${postIndex}-${index}`}
    //                             key={index}
    //                             display={posts[postIndex].data[index] === "" ? 1 : 0}
    //                             contentEditable={true}
    //                             onKeyUp={(event: any) => {
    //                                 IKeyUp(event, postIndex, index, posts, setPosts)
    //                             }}
    //                             onKeyDown={(event: any) => {
    //                                 IKeyDown(event, postIndex, index, posts, setPosts)
    //                             }}
    //                             onPaste={async (event) => {
    //                                 paste(event, posts, setPosts)
    //                             }}
    //                         />
    //                     );
    //                 })}
    //             </div>
    //         </CommentBoxList>
    //     );

    if (post?.type === "image") {
        if (post?.data)
            return (
                <ImageContainer src={post.data} alt="image" key={postIndex} />
            );
        else {
            return (
                <ImageFields key={postIndex} >
                    <div className="Upload">
                        <div className="Upper" onClick={() => { alert("as") }}>
                            <Image
                                src="/icons/upload.svg"
                                alt=""
                                width="100px"
                                height="75px"
                            />
                            <p>Upload</p>
                        </div>

                    </div>
                    {true && <div className="ButtonContainer">
                        <input type="url"
                            // disabled={post?.loading}
                            placeholder="Add An Image Link" />
                        <Button
                            text="submit"
                            textColor={`${theme.primary5}cc`}
                            backgroundColor={theme.text}
                            onClick={() => {

                            }}
                        // loading={post?.loading}
                        />
                    </div>}
                </ImageFields>
            )
        }
    }
    return <Empty
        textAlign={post.textAlign}
        color={post.color}
        marginLeft={post.marginLeft}
        id={`EditAble${postIndex}`}
        contentEditable={true}
        onKeyUp={(event) => {
            keyUp(event, postIndex, posts, setPosts, setActive)
        }}
        onKeyDown={async (event) => {
            keyDown(event, postIndex, {
                type: "",
                data: "",
                initialData: "",
            }, posts, setPosts, setActive)
        }}
        onPaste={async (event) => {
            paste(event, posts, setPosts)
        }}
        placeholder="Press the button to choose a component"
    />

};

export default Write;
