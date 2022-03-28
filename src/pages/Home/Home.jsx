import Card from "../../components/Card/Card";
import texts from "../../backend/featuresTexts.json"

export default function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
      <h2 className="sr-only">Promoted Content</h2>
            { texts.length > 0 ?
      texts.map((text, i) => 
        <Card key={i} title={text.title} content={text.content} img={text.img} />
        ) : null }    
      </section>
    </main>
  );
}
