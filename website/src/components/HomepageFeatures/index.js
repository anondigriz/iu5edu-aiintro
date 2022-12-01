import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Стивен Хокинг',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Я думаю, что мозг — это как компьютер с программой разума, так что 
        теоретически возможно скопировать мозг на компьютер и таким образом обеспечить
        одну из форм жизни после смерти… Однако, это лежит далеко за пределами наших текущих 
        возможностей. Я думаю, что жизнь после смерти — это сказка для людей, которые боятся темноты.
      </>
    ),
  },
  {
    title: 'Эндрю Ын',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Сегодня искусственный интеллект способен трансформировать многие отрасли:
        финансовые технологии, индустрию IT и здоровья. ИИ значительно повлиял на разработку и 
        создание беспилотного транспорта.
      </>
    ),
  },
  {
    title: 'Стивен Хокинг',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        В ближайшие 100 лет компьютеры обгонят нас по интеллекту. Мы должны быть уверены 
        в том, что, когда это произойдёт, цели компьютеров будут совпадать с нашими.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
