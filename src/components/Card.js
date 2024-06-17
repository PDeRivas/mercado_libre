import React from "react"

export default class Card extends React.Component {
    constructor(data){
        super()
        this.state = {
            title: data.title,
            price: data.price,
            thumbnail: data.thumbnail,
        }
    }
    render(){
        const title = this.state.title
        const price = this.state.price
        const thumbnail = this.state.thumbnail

        return (
            <div class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={ thumbnail } alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <a href="">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                { title }
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">{ price }</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
            </div>
    )}
}
