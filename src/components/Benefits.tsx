import { CardDemo } from '../components/Card';

const Benefits = () => {
  return (

    <section className="max-w-7xl flex flex-col gap-16">
      <h2 className="text-xl font-bold text-slate-700 md:text-2xl lg:text-5xl dark:text-slate-300">
        Discover the Benefits for Your AI Projects
      </h2>
      <div className="flex flex-col gap-2 sm:flex-row w-full items-center justify-center">
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

export default Benefits;
