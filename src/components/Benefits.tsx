import { memo } from 'react';
import { CardDemo } from '../components/Card';

const Benefits = () => {
  return (
    <section className="flex max-w-7xl flex-col gap-8 p-4 md:gap-16">
      <h2 className="text-2xl font-bold text-slate-300 md:text-5xl">Discover the Benefits for Your AI Projects</h2>
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center lg:gap-2">
        <CardDemo
          title="Gather any data you need"
          description="Define your ideal dataset structure and let the community collect exactly what your model requires."
          iconId="database"
        />
        <CardDemo
          title="Get best-quality data with no effort"
          description="All submissions are verified by other users to ensure accuracy, relevance, and consistency — so you don’t have to."
          iconId="trophy"
        />
        <CardDemo
          title="Cut data gathering costs"
          description="Crowdsourcing combined with blockchain incentives gives you high-quality data at a fraction of the traditional cost."
          iconId="money"
        />
      </div>
    </section>
  );
};

export default memo(Benefits);
