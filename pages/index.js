import SingleBox from "../components/singleBox";

function HomePage() {
  return (
    <main>
      {Array.from({ length: 4 }, (_, index) => {
        return index === 0 ? (
          <SingleBox image key={index} />
        ) : (
          <SingleBox key={index} />
        );
      })}
    </main>
  );
}

export default HomePage;
