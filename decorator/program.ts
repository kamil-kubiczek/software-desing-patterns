import { Computer } from "./computer.class"
import { ComputerDecorator } from "./computer.decorator"
import { ComputerWithGpuDecorator } from "./computerWithGpu.decorator"
import { ComputerWithSsdDecorator } from "./computerWithSSD.decorator"

const computerDecorator = new ComputerDecorator(new Computer("My PC", "Windows 10"))

const computerWithGpu = new ComputerWithGpuDecorator(computerDecorator)

computerWithGpu.renderVideo()

computerWithGpu.writeFile("Hello World")

const computerWithSSD = new ComputerWithSsdDecorator(computerWithGpu)

computerWithSSD.writeFile("Hello World")
