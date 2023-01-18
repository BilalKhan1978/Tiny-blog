import React, { useEffect, useState } from "react";
import { Post, RootObject } from "../types";
import Card from "./Card";
import { styles } from "./style";

const BlogInfo = () => {
  // To store data from Api (post object data)
  const [blogdata,blogdatachange]= useState<Post[]>([]);
  // Selected posts according to tag selection
  const [selectedblog,selectedblogchange]= useState<Post[]>([]);
  // Use for displaying/hidding cards
  const [showcard, setshowcard] = useState<boolean>();

  // This function is triggered when the changes occur. 
  // Onchange event
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const value = event.target.value;
    
    if(value==="history")
    {
        selectedblogchange(blogdata.filter(x=>x.tags.find(x=>x==="history")))
        setshowcard(true);
    }
    else if (value==="fiction")
    {
        selectedblogchange(blogdata.filter(x=>x.tags.find(x=>x==="fiction")))
        setshowcard(true);
    }
    else if (value==="love")
    {
        selectedblogchange(blogdata.filter(x=>x.tags.find(x=>x==="love")))
        setshowcard(true);
    }
    else if (value==="crime")
    {
        selectedblogchange(blogdata.filter(x=>x.tags.find(x=>x==="crime")))
        setshowcard(true);
    }
    else if (value==="english")
    {
        selectedblogchange(blogdata.filter(x=>x.tags.find(x=>x==="english")))
        setshowcard(true);
    }
  };


useEffect(() => {
    fetch('https://dummyjson.com/posts')    
    .then(response => response.json())
    .then((res:RootObject) =>{blogdatachange(res.posts);
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div>
        <h2>Select the section for the blog</h2>
     {/* dropdown */}
    <div style={styles.container}>
      <select onChange={selectChange} style={styles.select}>
        <option selected disabled>
        Choose one
        </option>
        <option value="history">History</option>
        <option value="love">Love</option>
        <option value="crime">Crime</option>
        <option value="english">English</option>
        <option value="fiction">Fiction</option>
      </select>
      <br/>
      </div>
       {/* Card section */}
      { selectedblog && selectedblog.map(item=>(
      <div >
      <section className="card-container">
      {showcard && (<Card
          id={item.id}
          title={item.title}
          body= {item.body}
          tags={item.tags}
           />)}
          <br/>      
         
      </section>
    </div> ))}
    </div>
  );
};

export default BlogInfo;
