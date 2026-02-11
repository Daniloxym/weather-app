import LoadingIcon from './LoadingIcon';
export default function Loading() {
  return (
    <div className='absolute top-15 left-0 text-neutral-0 bg-neutral-600 w-full py-3 px-4 rounded-lg flex gap-2 items-center z-10'>
      <LoadingIcon />
      <p>Search is in progress</p>
    </div>
  );
}
