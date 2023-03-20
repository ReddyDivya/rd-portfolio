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
	
