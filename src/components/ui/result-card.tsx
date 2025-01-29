import { Gender, LiveStatus } from '@/api/types';

type ResultCardProps = {
  name: string;
  status: LiveStatus;
  species: string;
  gender: Gender;
  image: string;
};

export const ResultCard = (props: ResultCardProps) => {
  const { name, status, species, gender, image } = props;

  const description = [
    { label: 'Gender', value: gender },
    { label: 'Status', value: status },
    { label: 'Species', value: species },
  ];

  return (
    <div className="flex max-sm:flex-col items-center max-sm:gap-1 gap-4">
      <div>
        <h2 className="text-2xl">{name}</h2>

        <dl className="mt-2">
          {description.map((item, index) => (
            <div key={index}>
              <dt className="inline">{item.label}: </dt>
              <dd className="inline">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <img
        src={image}
        width={150}
        height={150}
        alt={`Image of ${name}`}
        className="-order-1 rounded-xl"
      />
    </div>
  );
};
