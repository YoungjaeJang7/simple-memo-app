import { useState } from "react";

interface Props {
    onAddMemo: (content: string) => void;
}

export default function MemoForm({ onAddMemo }: Props) {
    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value.trim()) return;
        onAddMemo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="메모를 입력하세요"
            />
            <button type="submit">추가</button>
        </form>
    );
}
