# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Unit.destroy_all
Property.destroy_all
Owner.destroy_all

Owner.create!([
  {
    first_name: 'Tiffany', 
    last_name: 'Bibby', 
    email: 'tiffany.bibby@gmail.com', 
    password: '232323*'
  },
  {
    first_name: 'Christina', 
    last_name: 'Dauphin', 
    email: 'cd@email.com', 
    password: '121000'
  },
  {
    first_name: 'Neville', 
    last_name: 'Hall', 
    email: 'nh@email.com', 
    password: '082800'
  }
])

@owners = Owner.all 
puts "#{Owner.count} owners created"


Property.create!([
  {
    nickname: "Parent's Home",
    address: Faker::Address.full_address,
    units_num: 1,
    img:'https://www.auction.com/blog/wp-content/uploads/2014/12/single-family-homes.jpg',
    sq_ft: 1280,
    price: 400500,
    owner: @owners.first 
  },
  {
    nickname: "My Condo",
    address: Faker::Address.full_address,
    units_num: 1,
    img:'https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/190501Tribeca111MurrayStMAINPIC.jpg',
    sq_ft: 1200,
    price: 385000,
    owner: @owners.first
  },
  {
    nickname: "Black Girl Magic",
    address: Faker::Address.full_address,
    units_num: 50,
    img:'https://res.cloudinary.com/urby-llc/image/upload/f_auto,w_3420/295J-jersey-city-apartment-rental-exterior_lul1tm',
    sq_ft: 1280,
    price: 1000000,
    owner: @owners.first
  },
  {
    nickname: "Am I An Adult Yet?",
    address: Faker::Address.full_address,
    units_num: 1,
    img:'https://i1.wp.com/rei-ink.com/wp-content/uploads/2020/03/evolution-of-single-family-house-space.jpg?w=1080&ssl=1',
    sq_ft: 900,
    price: 300000,
    owner: @owners.second
  },
  {
    nickname: "Childhood Home",
    address: Faker::Address.full_address,
    units_num: 1,
    img:'https://photos.zillowstatic.com/fp/f6b0e9ecc8018e8c0158888eaaabc34b-cc_ft_1536.webp',
    sq_ft: 800,
    price: 255000,
    owner: @owners.third
  },
  {
    nickname: "The Hall",
    address: Faker::Address.full_address,
    units_num: 5,
    img:'https://www.thehouseplanshop.com/userfiles/photos/large/5558832025e21fc6d381b1.jpg',
    sq_ft: 1000,
    price: 906000,
    owner: @owners.third
  }
])

@properties = Property.all 
puts "#{Property.count} properties created"


Unit.create!([   
  {
    unit_number: "1",
    beds: 3,
    baths: 2.5,
    sq_ft: 1180,
    monthly_rent: 100,
    occupied: true,
    owner: @owners.first,
    property: @properties.first
  },
  {
    unit_number: "1",
    beds: 2,
    baths: 2,
    sq_ft: 1200,
    monthly_rent: 2200,
    occupied: true,
    owner: @owners.first,
    property: @properties.second
  },
  {
    unit_number:  "1",
    beds: 2,
    baths: 1,
    sq_ft: 800,
    monthly_rent: 2800,
    occupied: true,
    owner: @owners.second,
    property: @properties.fourth
  },
  {
    unit_number: "1",
    beds: 3,
    baths: 2.5,
    sq_ft: 1180,
    monthly_rent: 2900,
    occupied: true,
    owner: @owners.third,
    property: @properties.fifth
  } 
  ])
  
101.upto(110) do |i|
  beds = rand(1..3)
  Unit.create!(
    unit_number: "#{i}",
    beds: beds,
    baths: if beds == 1 then 1 elsif beds >= 2 then rand(1..2) end,
    sq_ft: if beds == 1 then 100 elsif beds == 2 then 150 elsif beds == 3 then 200 end,
    monthly_rent: if beds == 1 then 1800 elsif beds == 2 then 2200 elsif beds == 3 then 2900 end,
    occupied: Faker::Boolean.boolean,
    owner: @owners.first,
    property: @properties.third
  )
end

201.upto(210) do |i|
  beds = rand(1..3)
  Unit.create!(
    unit_number: "#{i}",
    beds: beds,
    baths: if beds == 1 then 1 elsif beds >= 2 then rand(1..2) end,
    sq_ft: if beds == 1 then 100 elsif beds == 2 then 150 elsif beds == 3 then 200 end,
    monthly_rent: if beds == 1 then 1800 elsif beds == 2 then 2200 elsif beds == 3 then 2900 end,
    occupied: Faker::Boolean.boolean,
    owner: @owners.first,
    property: @properties.third
  )
end

301.upto(310) do |i|
  beds = rand(1..3)
  Unit.create!(
    unit_number: "#{i}",
    beds: beds,
    baths: if beds == 1 then 1 elsif beds >= 2 then rand(1..2) end,
    sq_ft: if beds == 1 then 100 elsif beds == 2 then 150 elsif beds == 3 then 200 end,
    monthly_rent: if beds == 1 then 1800 elsif beds == 2 then 2200 elsif beds == 3 then 2900 end,
    occupied: Faker::Boolean.boolean,
    owner: @owners.first,
    property: @properties.third
  )
end

401.upto(410) do |i|
  beds = rand(1..3)
  Unit.create!(
    unit_number: "#{i}",
    beds: beds,
    baths: if beds == 1 then 1 elsif beds >= 2 then rand(1..2) end,
    sq_ft: if beds == 1 then 100 elsif beds == 2 then 150 elsif beds == 3 then 200 end,
    monthly_rent: if beds == 1 then 1800 elsif beds == 2 then 2200 elsif beds == 3 then 2900 end,
    occupied: Faker::Boolean.boolean,
    owner: @owners.first,
    property: @properties.third
  )
end

501.upto(510) do |i|
  beds = rand(1..3)
  Unit.create!(
    unit_number: "#{i}",
    beds: beds,
    baths: if beds == 1 then 1 elsif beds >= 2 then rand(1..2) end,
    sq_ft: if beds == 1 then 100 elsif beds == 2 then 150 elsif beds == 3 then 200 end,
    monthly_rent: if beds == 1 then 1800 elsif beds == 2 then 2200 elsif beds == 3 then 2900 end,
    occupied: Faker::Boolean.boolean,
    owner: @owners.first,
    property: @properties.third
  )
end

1.upto(5) do |i|
  beds = rand(0..2)
  Unit.create!(
    unit_number: "#{i}",
    beds: beds,
    baths: if beds == 0 then 1 elsif beds == 1 then 1 elsif beds == 2 then 2 end,
    sq_ft: if beds == 0 then 90 elsif beds == 1 then 110 elsif beds == 2 then 130 end,
    monthly_rent: if beds == 0 then 1700 elsif beds == 1 then 2000 elsif beds == 2 then 2500 end,
    occupied: Faker::Boolean.boolean,
    owner: @owners.third,
    property: @properties.last
  )
end
  
  
  @units = Unit.all 
  puts "#{Unit.count} units created"
  
  