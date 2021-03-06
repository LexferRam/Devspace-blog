import Link from 'next/link'

const CategoryLabel = ({children}) => {
    const colorKey = {
        JavaScript: 'yellow',
        PHP: 'purple',
        CSS: 'blue',
        Python: 'green',
        // Ruby:'red',
    }

    // console.log(children)

    return (
        <div className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}>
           {/* <div className={`px-2 py-1 bg-yellow-600 text-gray-100 font-bold rounded`}>  */}
            <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
        </div>
    );
};

export default CategoryLabel;
