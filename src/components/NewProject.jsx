import Input from './Input';
import Button from './Button';

export default function NewProject({ className, setAddProject }) {
  return (
    <section className={className}>
      <form className="flex flex-col gap-4 w-full">
        <div className="flex justify-end gap-2 mb-4">
          <Button secondary type="button" onClick={() => setAddProject(false)}>Cancel</Button>
          <Button primary type="submit">Create</Button>
        </div>
        <Input type="text" placeholder="Project Title" label="Title" />
        <Input textarea placeholder="Project Description" label="Description" />
        <Input type="date" placeholder="Due Date" label="Due Date" />
      </form>
    </section>
  );
}