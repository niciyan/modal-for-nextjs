interface Props {
  label: string;
  body: string;
}

export const Item = ({ label, body }: Props) => {
  return (
    <div className="py-2">
      <p className="text-lg">{`${label}: ${body}`}</p>
    </div>
  );
};
