interface Props {
  placeholder: string;
  styles: string;
  onChange: (e: any) => void;
}
const Textarea = ({ styles, placeholder, onChange }: Props) => {
  return (
    <textarea
      className={styles}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Textarea;
