import { useEffect, useState } from "react";
import MemoForm from "./components/MemoForm";
import MemoList from "./components/MemoList";
import type { Memo } from "./types";
import "./styles/App.css";

const STORAGE_KEY = import.meta.env.VITE_MEMO_STORAGE_KEY;

function App() {
  const [memos, setMemos] = useState<Memo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
  }, [memos]);

  const addMemo = (content: string) => {
    setMemos([
      { id: Date.now(), content, createdAt: new Date().toISOString() },
      ...memos,
    ]);
  };

  const deleteMemo = (id: number) => {
    setMemos(memos.filter((m) => m.id !== id));
  };

  const clearAll = () => {
    if (confirm("전체 삭제할까요?")) {
      setMemos([]);
    }
  };

  return (
    <div className="app">
      <h1>📝 Simple Memo</h1>
      <MemoForm onAddMemo={addMemo} />

      {memos.length > 0 && (
        <button className="clear" onClick={clearAll}>
          전체 삭제
        </button>
      )}

      <MemoList memos={memos} onDeleteMemo={deleteMemo} />
      <p>총 {memos.length}개</p>
    </div>
  );
}

export default App;
