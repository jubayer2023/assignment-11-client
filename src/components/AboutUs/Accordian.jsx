const Accordian = () => {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div className="collapse-title text-xl font-medium">Experience</div>
        <div className="collapse-content">
          <p>
            Experience: With [Number of Years] years of experience in the
            industry, our team has the knowledge and expertise to handle events
            of all scales and complexities
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">Creativity</div>
        <div className="collapse-content">
          <p>
            Creativity: We are constantly pushing the boundaries of creativity
            to design events that are unique, memorable, and reflective of your
            vision.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Professionalism
        </div>
        <div className="collapse-content">
          <p>
            Professionalism: Our team is known for its professionalism and
            commitment to delivering excellence in every aspect of event
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
