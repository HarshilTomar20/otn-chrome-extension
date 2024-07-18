interface TossResultProps {
  currentMatch: any
}

export default function TossResult({currentMatch}: TossResultProps) {
  return (
    <div className='my-4'>
      <text className='text-orange-600 text-left'>{
        currentMatch?.sStatusNote ?  currentMatch?.sStatusNote : currentMatch?.oToss?.sText}</text>
    </div>
  )
}

