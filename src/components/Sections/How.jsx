import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import data from '../../data.json';
import Layout from '../ui/Layout';
import PropTypes from 'prop-types';

const How = () => {
  const timelineData = data['section-how'].timeline;
  const [visibleIndex, setVisibleIndex] = useState(-1);

  return (
    <Layout>
      <div className="flex justify-center py-10 sm:pt-0 pb-20">
        <div className="px-4">
          <section id="how">
            <h1 className="text-center text-blue-custom font-bold text-xl pb-4 lg:py-10 mini:text-2xl sm:text-3xl md:text-[48px]">
              {data['section-how'].title}
            </h1>
          </section>
          <div className="grid gap-6">
            {Object.keys(timelineData).map((key, index) => {
              const stage = timelineData[key];
              return (
                <TimelineItem
                  key={index}
                  index={index}
                  stage={stage}
                  visibleIndex={visibleIndex}
                  setVisibleIndex={setVisibleIndex}
                  timelineData={timelineData}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const TimelineItem = ({
  index,
  stage,
  visibleIndex,
  setVisibleIndex,
  timelineData,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && visibleIndex < index) {
      setVisibleIndex(index);
    }
  }, [inView, index, visibleIndex, setVisibleIndex]);

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  const itemTransition = {
    duration: 0.5,
    delay: index * 0.2,
  };

  return (
    <section id="how">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={visibleIndex >= index ? 'visible' : 'hidden'}
        variants={itemVariants}
        transition={itemTransition}
        className="grid grid-cols-3 sm:gap-4 relative"
      >
        <div className="col-span-1">
          <img
            src={stage.url}
            alt={stage.alt}
            className="w-screen h-auto rounded-lg ml-[8vw] sm:ml-[12vw] 2xl:ml-0"
            style={{
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
        <div className="col-span-1 flex items-start justify-center">
          <div className="border border-black bg-white text-blue-custom w-6 h-6 flex items-center justify-center text-lg">
            <p className="text-xs font-bold">{index + 1}</p>
          </div>
          {index !== Object.keys(timelineData).length && (
            <div
              className="absolute inset-y-0 left-1/2 w-0.5 mt-8"
              style={{
                transform: 'translateX(-50%)',
                borderLeft: '1px dotted #B4B4B4',
                zIndex: -1,
              }}
            ></div>
          )}
        </div>
        <div className="col-span-1 flex flex-col items-start justify-start -ml-[8vw] sm:-ml-[12vw] 2xl:ml-0 lg:pr-20 text-xs">
          <div className="">
            <h3 className="sm:text-lg font-bold text-blue-custom">
              {stage.title}
            </h3>
          </div>
          <p
            className="text-blue-custom text-[10px] md:text-[12px] lg:text-[16px]"
            style={{ lineHeight: 'normal' }}
          >
            {stage.subtitle}
          </p>
          {stage.checks.map((check, i) => (
            <div
              className="flex items-center gap-2 mt-1 sm:mt-2 md:mt-4 sm:ml-4"
              key={i}
            >
              <img
                width={16}
                src={data['section-how']['checks-icon'].url}
                alt={data['section-how']['checks-icon'].alt}
              ></img>
              <p
                className="text-blue-custom text-[8px] sm:text-md md:text-[14px]"
                style={{ lineHeight: 'normal' }}
              >
                {check}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

TimelineItem.propTypes = {
  index: PropTypes.number.isRequired,
  stage: PropTypes.object.isRequired,
  visibleIndex: PropTypes.number.isRequired,
  setVisibleIndex: PropTypes.func.isRequired,
  timelineData: PropTypes.object.isRequired,
};

export default How;
