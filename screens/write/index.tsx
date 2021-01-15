import React, { useEffect, useState } from "react";
import { Container, ImageContainer, IconContainer, Options, EditorContainer, OptionTitle, OptionData, EditIconContainer } from "./style";
import Image from "next/image";
import WriteComponent from "../../components/write";
import { v4 } from "uuid";
import {
    // IKeyDown, IKeyUp,
    keyDown, keyUp, paste
} from "./logic"
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

const Write = ({ data }) => {
    const [posts, setPosts] = useState([]);
    const [optionView, setOptionView] = useState<boolean>(true);
    const [top, setTop] = useState<number>(200);
    const [left, setLeft] = useState<number>(0);
    const [optionDisplay, setOptionDisplay] = useState<boolean>(false);
    const [active, setActive] = useState<number>(-1);
    const [iconActive, setIconActive] = useState<number>(-1);
    const [options] = useState([
        {
            type: "title",
            icon: "/icons/title.svg",
            upperText: "Title",
            SubText: "Create Bold Larger title"
        },
        {
            type: "header",
            icon: "/icons/header.svg",
            upperText: "Header",
            SubText: "Create Minor Title"
        },
        {
            type: "header2",
            icon: "/icons/header2.svg",
            upperText: "Description",
            SubText: "Add A Description To Your Title"
        },
        {
            type: "text",
            icon: "/icons/text.svg",
            upperText: "Text",
            SubText: "Create A Simple Plain Text"
        },
        {
            type: "dot",
            icon: "/icons/dot.svg",
            upperText: "Dot List",
            SubText: "Create A Dot Listing "
        },
        {
            type: "box",
            icon: "/icons/border.svg",
            upperText: "Box",
            SubText: "Add A Text Contained In A Box"
        },
        {
            type: "commentBox",
            icon: "/icons/comment.svg",
            upperText: "Quote",
            SubText: "Add A Quote"
        },
        {
            type: "image",
            icon: "/icons/upload.svg",
            upperText: "Image",
            SubText: "Add an image"
        }
    ]);

    const [droppableId] = useState<string>("a961adfe-de5a-49de-a3a2-3176176b8242");
    const onDragEnd = async (result: DropResult) => {
        if (!result.destination) return
        const { source, destination } = result;
        let copy = [...posts]
        let [removed] = copy.splice(source.index, 1)
        copy.splice(destination.index, 0, removed)
        setPosts(copy)
        setActive(destination.index)
    };
    useEffect(() => {
        setPosts(data)
    }, [data])

    const change = async (type, index) => {
        let currentPosts = posts;
        currentPosts[index].type = type;
        currentPosts[index].initialData = currentPosts[index].data;
        if (type === "image") {
            currentPosts[index].initialData = "";
            currentPosts[index].data = "";
            currentPosts[index].loading = false;
            currentPosts[index].link = false;
        }
        await setPosts(currentPosts);
        await setOptionDisplay(false);
        setOptionView(true);
        document.getElementById(`EditAble${index}`)?.focus();
    }
    return (
        <>
            {optionDisplay &&
                <Options top={top} left={left} >
                    <OptionTitle>
                        <p>{posts[iconActive].type === "" ? "Content" : "Change Content"}</p>
                        <div className="Icons">

                            <ImageContainer
                                onClick={async () => {
                                    let currentPosts = posts;
                                    currentPosts.splice(iconActive + 1, 0, {
                                        id: v4(),
                                        data: "",
                                        initialData: "",
                                        type: "",
                                        color: "",
                                        marginLeft: currentPosts[iconActive].marginLeft,
                                        textAlign: "",
                                    });
                                    await setPosts(currentPosts);
                                    setOptionDisplay(false)
                                    setOptionView(true);
                                    document.getElementById(`EditAble${iconActive + 1}`)?.focus();
                                    setActive(iconActive)
                                }}>
                                <Image src="/icons/plus.svg" width="20px" height="20px" quality="100" priority={true} loading="eager" />
                            </ImageContainer>
                            {posts[iconActive].initialData !== posts[iconActive].data &&
                                <ImageContainer
                                    onClick={async () => {
                                        let currentPosts = posts;
                                        if (currentPosts.length > 1 && currentPosts[iconActive].type !== "") {
                                            currentPosts[iconActive].data = currentPosts[iconActive].initialData;
                                            let node = document.getElementById(`EditAble${iconActive}`);
                                            node.textContent = currentPosts[iconActive].initialData;
                                            setPosts(currentPosts);
                                            node?.focus();
                                            setActive(iconActive)
                                        }
                                    }}>
                                    <Image src="/icons/undo.svg" width="20px" height="20px" quality="100" priority={true} loading="eager" />
                                </ImageContainer>
                            }
                            <ImageContainer
                                onClick={async () => {
                                    setOptionView(!optionView)
                                }}>
                                <Image src={optionView ? "/icons/setting.svg" : "/icons/change.svg"} width="20px" height="20px" quality="100" priority={true} loading="eager" />
                            </ImageContainer>
                            {posts[iconActive].type !== "" && posts.length > 1 &&
                                <ImageContainer
                                    onClick={() => {
                                        let currentPosts = posts;
                                        if (currentPosts.length > 1 && currentPosts[iconActive].type !== "") {
                                            setOptionDisplay(false);
                                            setOptionView(true);
                                            currentPosts.splice(iconActive, 1);
                                            setPosts([...currentPosts]);
                                            document.getElementById(`EditAble${iconActive - 1}`)?.focus();
                                            setActive(iconActive - 1)
                                        }
                                    }}>
                                    <Image src="/icons/delete.svg" width="18px" height="18px" quality="100" priority={true} loading="eager" />
                                </ImageContainer>
                            }
                        </div>
                    </OptionTitle>
                    {optionView ? options.map((data, index) => {
                        return (
                            <OptionData
                                key={index}
                                onClick={() => change(data.type, iconActive)}>
                                <div className="left">
                                    <Image src={data.icon} width="30px" height="30px" quality="100" priority={true} loading="eager" />
                                </div>
                                <div className="right">
                                    <p className="Title">{data.upperText}</p>
                                    <p className="SubText">{data.SubText}</p>
                                </div>
                            </OptionData>)
                    }) : <div>
                            {posts[iconActive].type !== "dot" && posts[iconActive].type !== "commentBox" && <>
                                <OptionTitle>
                                    <p>Alignment</p>
                                </OptionTitle>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", }}>
                                    <EditIconContainer onClick={async () => {
                                        let currentPosts = posts;
                                        currentPosts[iconActive].textAlign = "left";
                                        setPosts([...currentPosts]);
                                        setOptionDisplay(false)
                                        setOptionView(true);
                                        document.getElementById(`EditAble${iconActive}`)?.focus();
                                        setActive(iconActive)
                                    }}>
                                        <Image src="/icons/alignLeft.svg" width="20px" height="20px" quality="100" priority={true} loading="eager" />
                                    </EditIconContainer>
                                    <EditIconContainer onClick={async () => {
                                        let currentPosts = posts;
                                        currentPosts[iconActive].textAlign = "center";
                                        setPosts([...currentPosts]);
                                        setOptionDisplay(false)
                                        setOptionView(true);
                                        document.getElementById(`EditAble${iconActive}`)?.focus();
                                        setActive(iconActive)
                                    }}>
                                        <Image src="/icons/alignCenter.svg" width="20px" height="20px" quality="100" priority={true} loading="eager" />
                                    </EditIconContainer>
                                    <EditIconContainer onClick={async () => {
                                        let currentPosts = posts;
                                        currentPosts[iconActive].textAlign = "right";
                                        setPosts([...currentPosts]);
                                        setOptionDisplay(false)
                                        setOptionView(true);
                                        document.getElementById(`EditAble${iconActive}`)?.focus();
                                        setActive(iconActive)
                                    }}>
                                        <Image src="/icons/alignRight.svg" width="20px" height="20px" quality="100" priority={true} loading="eager" />
                                    </EditIconContainer>
                                </div>
                            </>}
                            <OptionTitle>
                                <p>Padding</p>
                            </OptionTitle>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", }}>
                                <EditIconContainer onClick={async () => {
                                    let currentPosts = posts;
                                    currentPosts[iconActive].marginLeft = currentPosts[iconActive].marginLeft ? currentPosts[iconActive].marginLeft + 25 : 25;
                                    setPosts([...currentPosts]);
                                    setOptionDisplay(false)
                                    setOptionView(true);
                                    document.getElementById(`EditAble${iconActive}`)?.focus();
                                    setActive(iconActive)
                                }}>
                                    <Image src="/icons/left.svg" width="20px" height="20px" quality="100" priority={true} loading="eager" />
                                </EditIconContainer>
                                <EditIconContainer onClick={async () => {
                                    let currentPosts = posts;
                                    currentPosts[iconActive].marginLeft = currentPosts[iconActive].marginLeft && currentPosts[iconActive].marginLeft >= 25 ? currentPosts[iconActive].marginLeft - 25 : 0;
                                    setPosts([...currentPosts]);
                                    setOptionDisplay(false)
                                    setOptionView(true);
                                    document.getElementById(`EditAble${iconActive}`)?.focus();
                                    setActive(iconActive)
                                }} >
                                    <Image src="/icons/right.svg" width="20px" height="20px" quality="100" priority={true} loading="eager" />
                                </EditIconContainer>
                            </div>
                            <OptionTitle>
                                <p>Color</p>
                            </OptionTitle>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr", }}>
                                <EditIconContainer>
                                    <input
                                        type="color"
                                        placeholder={posts[iconActive].color}
                                        onChange={(event) => {
                                            let currentPosts = posts;
                                            currentPosts[iconActive].color = event.target.value;
                                            setPosts([...currentPosts]);
                                            document.getElementById(`EditAble${iconActive}`)?.focus();
                                            setActive(iconActive)
                                        }} />
                                </EditIconContainer>
                            </div>
                        </div>}
                </Options>
            }
            <Container
                onTouchStart={() => {
                    if (optionDisplay)
                        setOptionDisplay(false)
                    setOptionView(true);
                }}
                onClick={() => {
                    if (optionDisplay)
                        setOptionDisplay(false)
                    setOptionView(true);
                }}
            >
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={droppableId}>
                        {(provided, _) => {
                            return <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {posts.map((post, index) => {
                                    return <Draggable key={post.id} draggableId={post.id} index={index} >
                                        {(provided, _) => {
                                            return (
                                                <EditorContainer
                                                    {...provided.draggableProps}
                                                    ref={provided.innerRef}
                                                    key="index"
                                                    {...provided.dragHandleProps}
                                                    onMouseOver={() => {
                                                        setActive(index)
                                                    }}
                                                >
                                                    {active === index ? <IconContainer>
                                                        <ImageContainer
                                                            onClick={async () => {
                                                                await setActive(index)
                                                                await setIconActive(index)
                                                                setOptionDisplay(true)
                                                                setOptionView(true);
                                                                let element = document.getElementById(`editable${post.id}`);
                                                                let elementData = element?.getBoundingClientRect();
                                                                let upperData = document.body.clientHeight - (elementData.top + elementData.height - 60) > 350;
                                                                setTop(upperData ?
                                                                    elementData.top + elementData.height - 60 + document.documentElement.scrollTop :
                                                                    document.body.clientHeight - 375 + document.documentElement.scrollTop)
                                                                setLeft(elementData.left);
                                                            }}>
                                                            <Image src="/icons/edit.svg" width="18px" height="18px" quality="100" priority={true} loading="eager" />
                                                        </ImageContainer>
                                                    </IconContainer> : <div></div>}
                                                    <div id={`editable${post.id}`}  >
                                                        <WriteComponent
                                                            post={post}
                                                            postIndex={index}
                                                            posts={posts}
                                                            setPosts={setPosts}
                                                            paste={paste}
                                                            // IKeyUp={IKeyUp}
                                                            // IKeyDown={IKeyDown}
                                                            keyUp={keyUp}
                                                            keyDown={keyDown}
                                                            setActive={setActive}
                                                        />
                                                    </div>

                                                </EditorContainer>
                                            )
                                        }}
                                    </Draggable>
                                })}
                                {provided.placeholder}
                            </div>
                        }}
                    </Droppable>
                </DragDropContext>
                <div className="Bottom" />
            </Container >
        </>
    )
};

export default Write;