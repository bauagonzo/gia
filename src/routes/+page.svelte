<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";
    import { ChevronDownOutline, AppleSolid } from "flowbite-svelte-icons";
    import { Select, Label } from "flowbite-svelte";
  let selected = "en";
  let countries = [
    { value: "en", name: "EN" },
    { value: "fr", name: "FR"},
    { value: "sp", name: "SP", disabled: true }
  ];
</script>

<Navbar class="bg-white border-b border-gray-200">
    <NavBrand href="#">
        <span class="text-xl font-semibold">GIA test</span>
    </NavBrand>
    <!-- Centered links -->
    <div class="flex mx-auto space-x-4">
        <NavUl>
            <NavLi href="/results">Results</NavLi>
            <NavLi href="/reasoning">Reasoning</NavLi>
            <NavLi href="/perceptual">Perceptual</NavLi>
            <NavLi href="/number">Number</NavLi>
            <NavLi href="/word">Word</NavLi>
            <NavLi href="#">Spatial</NavLi>
        </NavUl>
    </div>
<Label>
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>

</Navbar>
