import styles from "./SectionText.module.css";

const SectionText = () => {
  const firstText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus modi provident, minus omnis aspernatur atque dignissimos saepe? Doloremque quibusdam voluptas! Vero eos adipisci fugiat perspiciatis officiis deserunt expedita minus? Architecto blanditiiscommodi quam, aspernatur id libero. Quidem fugiat expedita fugit iustoaperiam deserunt nostrum similique exercitationem. Natus, sit error!  Beatae inventore tempora officiis, sunt repellendus blanditiis cumque  distinctio eum. Ipsum dolorem esse architecto illo commodi assumenda saepe ea earum, consequatur sed explicabo laudantium tempore. Eos eius ab aperiam, accusantium, dolor tenetur dolorum voluptatibus ipsum id  ratione pariatur incidunt doloremque! Culpa saepe dolor ut aliquid  tempore? Cupiditate aperiam odio odit eveniet debitis laboriosam natus adipisci maiores consequuntur iure. Error culpa nemo provident doloreaccusantium laboriosam rerum porro ut id optio! Facilis temporibus iusto, quidem tempora laudantium voluptatem modi sint minima. Quidem, earum facere. Ut cupiditate eum modi architecto sit iure dicta, repellat, alias necessitatibus velit neque ipsa quod perspiciatis nam!";
  const secondText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nulla vitae iste! Distinctio debitis, eum sed laborum atque mollitia sunt, unde quas reprehenderit quisquam corporis, delectus aut dignissimos nobis commodi? Dignissimos ut corporis eveniet aperiam, reiciendis suscipit quidem adipisci ipsam doloribus. Dolorem et enim, rem voluptas numquam beatae eos sunt unde obcaecati delectus voluptatem minima repudiandae quas vitae impedit facere. Odio aut tempora minima sed voluptas laboriosam explicabo recusandae eius quod consequuntur, at iste, cumque voluptates aspernatur? Ratione animi blanditiis debitis placeat sint,architecto, repellat commodi corrupti, culpa modi libero!";
  return (
    <section className={styles.text}>
      <div>
        <p>{firstText}</p>
        <p>{secondText}</p>
      </div>
    </section>
  );
};

export default SectionText;
