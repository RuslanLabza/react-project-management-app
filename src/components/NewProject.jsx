import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({
  className,
  onCreateProject,
  onCancelProjectCreation,
}) {
  const modalRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleRef.current.getValue();
    const description = descriptionRef.current.getValue();
    const dueDate = dueDateRef.current.getValue();

    if (!title.trim() || !description.trim() || !dueDate) {
      modalRef.current.open();
      return;
    }

    onCreateProject(title, description, dueDate);
  };

  return (
    <>
      <Modal ref={modalRef}>
        <p className="text-lg font-semibold text-red-600 mb-6 text-center">
          Please fill in all fields.
        </p>
      </Modal>
      <section className={className}>
        <form className="flex flex-col gap-4 w-full">
          <div className="flex justify-end gap-2 mb-4">
            <Button secondary type="button" onClick={onCancelProjectCreation}>
              Cancel
            </Button>
            <Button primary type="submit" onClick={handleSubmit}>
              Create
            </Button>
          </div>
          <Input
            ref={titleRef}
            type="text"
            placeholder="Project Title"
            label="Title"
          />
          <Input
            ref={descriptionRef}
            textarea
            placeholder="Project Description"
            label="Description"
          />
          <Input
            ref={dueDateRef}
            type="date"
            placeholder="Due Date"
            label="Due Date"
          />
        </form>
      </section>
    </>
  );
}
