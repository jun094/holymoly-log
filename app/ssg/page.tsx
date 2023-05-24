import { API_URL } from 'constants/index';
import { UserType } from 'types/index.types';

const fetchContents = async () => {
  const res = await fetch(API_URL, { cache: 'force-cache' });
  const contents: any = await res.json();
  return contents;
};

async function Ssg() {
  const contents = await fetchContents();

  return (
    <div>
      <h1>SSG 페이지입니다.</h1>
      <ul>
        {contents.map(({ name }: any) => (
          <h4 key={name}>{name}</h4>
        ))}
      </ul>
    </div>
  );
}

export default Ssg;
