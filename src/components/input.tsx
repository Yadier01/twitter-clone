interface Props {
  inputType: string;
  placeholder: string;
  styles: string;
}
const input = ({ styles, inputType, placeholder }: Props) => {
  return (
    <input type={inputType} className={styles} placeholder={placeholder} />
  );
};

export default input;
