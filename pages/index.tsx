import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";
import Layout from "../components/layout";
import Write from "../screens/write";
import { v4 } from "uuid";


export const getServerSideProps: GetServerSideProps = async (_) => {
  resetServerContext();

  const data = [
    {
      type: "title",
      data: "",
      initialData: "",
      color: "",
      marginLeft: "",
      textAlign: "",
      id: v4()
    },
    {
      type: "header",
      data: "",
      initialData: "",
      color: "",
      marginLeft: "",
      textAlign: "",
      id: v4()
    },
    {
      type: "box",
      data: "",
      initialData: "",
      color: "",
      marginLeft: "",
      textAlign: "",
      id: v4()
    },
    {
      type: "commentBox",
      data: "",
      initialData: "",
      color: "",
      marginLeft: "",
      textAlign: "",
      id: v4()
    },
    {
      type: "text",
      data: "",
      initialData: "",
      color: "",
      marginLeft: "",
      textAlign: "",
      id: v4()
    },
    {
      type: "dot",
      data: "",
      initialData: "",
      color: "",
      marginLeft: "",
      textAlign: "",
      id: v4()
    },
  ];
  return {
    props: {
      data
    }
  }
}


const WritePage = ({ data }) => (
  <Layout title="home page">
    <Write data={data} />
  </Layout>
)



export default WritePage;