import './App.css'
import BoardForm from "./BoardForm.jsx";
import BoardList from "./BoardList.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [boards   , setBoard] = useState([]);
    //전체보기
    const listBoard = () => {
      //DB로 부터 데이터를 가지고 와서 boards 에 넣기
        axios.get('/api/list')
        .then((res) => {
            console.log('전체보기 :', res);
            setBoard(res.data);
        })
    }
    //받아 온 내용 추가하기
    const insertBoard = (formData) => {
      console.log("추가할 내용 : ",formData)
      axios.post("/api/insert", {
          title: formData.title,
          content: formData.content,
      }).then(res => {
          console.log('등록완료 :', res.data);
         // listBoard()
          setBoard([...boards,res.data]);
      })
    }
    //삭제
    const removeBoard = (targetNum) => {
        axios.delete(`api/delete/${targetNum}`)
            .then(()=>{
                alert('삭제성공')
                setBoard(boards.filter(board=>board.num !==targetNum))
            })
    }
    useEffect(() => {
        listBoard()
    },[])
  return (
      <div className="App">
          <h2>React10_board_axios</h2>
          <BoardForm insertBoard={insertBoard}/>
          <BoardList boards={boards}
                     removeBoard={removeBoard}/>
      </div>
  )
}

export default App
