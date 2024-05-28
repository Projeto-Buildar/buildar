import './SextaTela.css';

export default function SextaTela() {
  return(
    <main id="sextaTela">
      <div className='backgroundLeft'></div>
      <div className='backgroundMid'></div>
      <article>
        <h2>Que tal se tornar um <span className="destaqRoxo">CAPoiardor</span>?</h2>
        <p>Caso queira uma experiência <span className='destaqBranco'>ainda mais imersiva</span>, aqui estão alguns caminhos</p>
      </article>
      <aside>
        <section>
          <h3>Plano 1</h3>
          <p>Vantagem do Plano Planado</p>
        </section>
        <section>
          <h3>Plano 2</h3>
          <p>Vantagem do Plano Planejado</p>
        </section>
        <section>
          <h3>Plano 3</h3>
          <p>Vantagem do Plano Planento</p>
        </section>
      </aside>
      <div className='backgroundRight'></div>
    </main>
  );
}