import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Cycles } from "../Cycles";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <Input
          labelText="Task"
          id="input"
          type="text"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <Button icon={<PlayCircleIcon />} color="green" />
        <Button icon={<StopCircleIcon />} color="red" />
      </div>
    </form>
  );
}
