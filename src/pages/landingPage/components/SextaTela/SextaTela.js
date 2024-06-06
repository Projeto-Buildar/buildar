import './SextaTela.css';

export default function SextaTela() {
  return(
    <div id="sextaTela" className='frame'>
      <div className='backgroundLeft'></div>
      <div className='backgroundMid'></div>
      <article>
        <h2>Que tal se tornar um <span className="destaqRoxo">CAPoiardor</span>?</h2>
        <p>Caso queira uma experiência <span className='destaqBranco'>ainda mais imersiva</span>, aqui estão alguns caminhos</p>
      </article>
      <section>
        <div className='plano'>
          <h3>Plano 1</h3>
          <p>Vantagem do Plano Planado</p>
        </div>
        <div className='plano'>
          <h3>Plano 2</h3>
          <p>Vantagem do Plano Planejado</p>
        </div>
        <div className='plano'>
          <h3>Plano 3</h3>
          <p>Vantagem do Plano Planento</p>
        </div>
      </section>
      <div className='backgroundRight'></div>
    </div>
  );
}