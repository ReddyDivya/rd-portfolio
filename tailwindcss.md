## tailwindcss
	
### Layout (Top / Right / Bottom / Left)
	- Utilities for controlling the placement of positioned elements.
	- bottom-2	bottom: 0.5rem; /* 8px */
	
### Fixed widths
	- Use w-{number} or w-px to set an element to a fixed width.
	 
	 <div class="w-96 ..."></div>
		
### custom screen names
	- 'tablet': '640px',  // => @media (min-width: 640px) { ... }

	- 'laptop': '1024px', // => @media (min-width: 1024px) { ... }

	- 'desktop': '1280px'; // => @media (min-width: 1280px) { ... }
		
### Percentage widths
	- Use w-{fraction} or w-full to set an element to a percentage based width.
	
	<div class="w-1/2 ... ">w-1/2</div>
	<div class="w-2/5 ...">w-2/5</div>
	<div class="w-3/5 ...">w-3/5</div>
	<div class="w-full ...">w-full</div>
	
### Fixed heights
	- Use h-{number} or h-px to set an element to a fixed height.
	
	<div class="h-96 ...">h-96</div>
	<div class="h-80 ...">h-80</div>

### Pill buttons
	- Use the rounded-full utility to create pill buttons.
	
	<button class="rounded-full">Save Changes</button>
	
### No rounding
	- Use rounded-none to remove an existing border radius from an element.
	
	<div class="rounded-t-lg ..."></div>
	<div class="rounded-r-lg ..."></div>
	<div class="rounded-b-lg ..."></div>
	<div class="rounded-l-lg ..."></div>
	
	<div class="rounded-tl-lg ..."></div>
	<div class="rounded-tr-lg ..."></div>
	<div class="rounded-br-lg ..."></div>
	<div class="rounded-bl-lg ..."></div>
	<button class="rounded-none">Save Changes</button>

### Rounding sides separately
	- Use rounded-{t|r|b|l}{-size?} to only round one side of an element.
	
### Using the container
	- To center a container, use the mx-auto utility.
	
	<div class="container mx-auto"></div>

### Flex
	- Utilities for controlling how flex items both grow and shrink.
	
	<div class="flex">
	  <div class="flex-none w-14 h-14">
		01
	  </div>
	  <div class="flex-initial w-64 ...">
		02
	  </div>
	  <div class="flex-initial w-32 ...">
		03
	  </div>
	</div>

### Justify Content
	- Utilities for controlling how flex and grid items are positioned along a container's main axis.
	
	justify-between	justify-content: space-between;
	
	### Space between
		- Use justify-between to justify items along the container’s main axis such that there is an equal amount of space between each item.
		
		<div class="flex justify-between">
		  <div>01</div>
		  <div>02</div>
		  <div>03</div>
		</div>