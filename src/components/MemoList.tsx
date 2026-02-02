import type { Memo } from "../types";

interface Props {
    memos: Memo[];
    onDeleteMemo: (id: number) => void;
}

export default function MemoList({ memos, onDeleteMemo }: Props) {
    return (
        <ul>
            {memos.map((memo) => (
                <li key={memo.id}>
                    {memo.content}
                    <button onClick={() => onDeleteMemo(memo.id)}>삭제</button>
                </li>
            ))}
        </ul>
    );
}
