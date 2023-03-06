import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BaseUri } from '../../../context/UserContext';
import { useRouter } from 'next/router';
import { ministries } from '../../../ministries/ministriesData';

const Modal = ({ handleModal }) => {
  const [title, setTitle] = useState('');
  const [attendee, setAttendee] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  // router
  const router = useRouter();
  //style
  const style = {
    section:
      'absolute top-0 left-0 bg-black/80 p-2 text-heading z-10 w-full h-full',
    nav: 'flex justify-between items-center mb-4',
    navClose: 'cursor-pointer text-purple-900',
    container: ' mb-4',
    headerText: 'font-medium text-xl mb-2',
    modalContainer:
      'modalContainer bg-white rounded w-[500px] py-2 px-4 border-t-2 border-purple-800 absolute top-[60px] left-[50%] translate-x-[-50%]',
    input:
      'px-3 py-3 text-sm outline-none border-[1px] border-black/40 hover:border-black/60 focus:border-black/60 rounded mt-1 w-full capitalize',
    form: 'space-y-4',
    label: 'font-medium text-md',
    labelSpan: 'text-purple-700',
  };
  // baseUri context
  // const baseUri = useContext(BaseUri);
  const baseUri = 'https://oic-backend-production.up.railway.app';

  // submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newActivities = {
      title,
      attendee,
      time,
      date,
      description,
    };
    const response = await fetch(`${baseUri}/activity/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newActivities),
    });
    console.log(response);
    router.reload();
    // window.location.reload();
  };

  const list = ministries
    .map((data) => data.ministry)
    .sort((a, b) => (a > b ? 1 : -1));

  return (
    <section className={style.section}>
      <div className={style.modalContainer}>
        <nav className={style.nav}>
          <div className='module'>
            <span className='font-medium'>Activities</span> | Add Activity
          </div>
          <div className={style.navClose} onClick={handleModal}>
            <AiOutlineClose />
          </div>
        </nav>
        <div className={style.container}>
          <form action='' className={style.form} onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <label htmlFor='title' className={style.label}>
                  Title <span className={style.labelSpan}>*</span>
                </label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  className={style.input}
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='attendee' className={style.label}>
                  Expected Attendees <span className={style.labelSpan}>*</span>
                </label>
                <select
                  name='attendee'
                  id='attendee'
                  required
                  className={style.input}
                  value={attendee}
                  onChange={(e) => setAttendee(e.target.value)}
                >
                  <option value='' disabled selected>
                    Select attendees
                  </option>
                  {list
                    .map((data, index) => {
                      return (
                        <option value={data} key={index}>
                          {data}
                        </option>
                      );
                    })
                    .sort((a, b) => (a.ministry > b.ministry ? 1 : -1))}
                  <option value='All'>All</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-2'>
              <div>
                <label htmlFor='time' className={style.label}>
                  Time <span className={style.labelSpan}>*</span>
                </label>
                <input
                  type='time'
                  id='time'
                  name='time'
                  className={style.input}
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='date' className={style.label}>
                  Date <span className={style.labelSpan}>*</span>
                </label>
                <input
                  type='date'
                  id='date'
                  name='date'
                  className={`${style.input}` + `lowercase`}
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor='description' className={style.label}>
                Description <span className={style.labelSpan}>*</span>
              </label>
              <br />
              <textarea
                name='description'
                id='description'
                cols='20'
                rows='4'
                required
                className={`${style.input}` + `normal-case`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='grid place-items-center'>
              <button
                type='submit'
                className='px-3 py-3 bg-purple-700 rounded text-white shadow-md hover:bg-purple-800 text-sm w-[100px] '
              >
                Set
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// main component
const Header = ({
  handleActivitySelectorToTrue,
  handleActivitySelectorToFalse,
  activitySelector,
}) => {
  const [modal, setModal] = useState(false);
  // Modal
  const handleModal = () => {
    setModal(!modal);
  };
  // style
  const style = {
    container: 'flex item-center justify-between mb-2 ',
    inputSearch:
      'py-3 px-4 outline-none border-[1px] border-black/40 hover:border-black/60  text-sm w-[350px] focus:border-black/60 rounded',
    user: 'flex items-center w-auto w-[70px] justify-between',
    btnContainer: 'grid place-items-center',
    btn: 'px-4 h-full text-white bg-green-800 rounded shadow-lg hover:bg-green-900 text-sm',
    headerBtn:
      ' capitalize p-3 cursor-pointer rounded transition-all text-sm font-medium border-[1px] border-purple-700 hover:text-white hover:bg-purple-800 shadow',
  };

  return (
    <>
      {modal ? <Modal handleModal={handleModal} /> : null}
      <section className={style.container}>
        <div className='grid grid-cols-2 gap-2'>
          <p
            className={`${style.headerBtn} ${
              activitySelector
                ? 'bg-purple-700 text-white'
                : 'bg-purple-50 text-purple-700'
            }`}
            onClick={handleActivitySelectorToTrue}
          >
            incoming activities
          </p>
          <p
            className={`${style.headerBtn} ${
              activitySelector
                ? ' bg-purple-50 text-purple-700'
                : 'bg-purple-700 text-white'
            }`}
            onClick={handleActivitySelectorToFalse}
          >
            activities occured
          </p>
        </div>
        {/* <form action="" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={style.inputSearch}
          />
        </form> */}
        <div className={style.btnContainer}>
          <button className={style.btn} onClick={handleModal}>
            Add Activity
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
