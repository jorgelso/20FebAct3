interface RectangleProps {
    color: string
}

export default function Rectangle({ color }: RectangleProps) {
    return <div style={{backgroundColor: color}} className="w-60 h-32"> </div>
}