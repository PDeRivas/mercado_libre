import React from "react"

export default class Card extends React.Component {
    constructor(children){
        super()
        this.state = {
            title: children.children.title,
            price: children.children.price,
            thumbnail: children.children.thumbnail,
        }
    }
    render(){
        const title = this.state.title
        const price = this.state.price
        const thumbnail = this.state.thumbnail

        return (
            <div className="group relative flex-0 w-64">
                <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={ thumbnail } alt={ title } className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                { title }
                            </a>
                            <p className="text-sm font-medium text-gray-900">${ price }</p>
                        </h3>
                    </div>
                </div>
            </div>
    )}
}
